import {
  type CallOptions,
  Metadata as GrpcMetadata,
  InterceptingCall,
  type Interceptor,
  type Listener,
  type Metadata,
} from '@grpc/grpc-js';

import { Code } from '../../api/google/rpc/index.js';
import { Logger } from '../util/logging.js';

import type { Provider } from './provider.js';

function timeLeftMs(deadline: CallOptions['deadline']): number | undefined {
  if (!deadline) return undefined;
  const now = Date.now();
  if (deadline instanceof Date) return Math.max(0, deadline.getTime() - now);
  if (typeof deadline === 'number') return Math.max(0, deadline - now);
  return undefined;
}

/**
 * Creates a gRPC interceptor that authenticates each RPC before it starts.
 *
 * Each attempt uses a copy of the caller metadata, so a retry does not add a
 * second authorization header. The interceptor passes the remaining RPC
 * deadline to the authenticator as a timeout budget. A custom authenticator
 * that ignores this budget is not forcibly stopped. When authentication cannot
 * retry, the interceptor completes the RPC with `UNAUTHENTICATED` and does not
 * contact the service.
 *
 * SDK users do not normally call this function. Use it when assembling a
 * custom gRPC client with a {@link Provider}.
 */
export function createAuthorizationInterceptor(provider: Provider, logger: Logger): Interceptor {
  logger.trace('Creating authorization interceptor', { provider });
  return (options, nextCall) => {
    const aLog = logger.child('authorization_interceptor', { options });
    aLog.trace('Authorization interceptor invoked');
    const auth = provider.authenticator();

    const requester = {
      start(
        metadata: Metadata,
        listener: Listener,
        next: (metadata: Metadata, listener: Listener) => void,
      ) {
        aLog.trace('Authorization start');
        const disable = !!options?.authorizationDisable;
        const authOptions = options?.authorizationOptions;

        if (disable) {
          aLog.trace('Authorization disabled for this call');
          return next(metadata, listener);
        }

        const wrapped: Listener = {
          onReceiveMetadata: (md, nextMd) => nextMd(md),
          onReceiveMessage: (msg, nextMsg) => nextMsg(msg),
          onReceiveStatus: (status, nextStatus) => nextStatus(status),
        };

        const startTs = Date.now();
        let attempt = 0;
        const deadline = options?.deadline;
        let patchedMd: Metadata | undefined;

        const doAuthLoop = async (): Promise<boolean> => {
          const alLog = aLog.withFields({ startTs, deadline, authOptions });
          alLog.trace('Starting authentication loop');
          while (true) {
            attempt += 1;
            const left = timeLeftMs(deadline);
            const timeoutMs = left === undefined ? undefined : Math.max(0, left);
            const lLog = aLog.withFields({ attempt, left, timeoutMs });
            lLog.debug('Authentication attempt');
            const mdAttempt = (metadata as GrpcMetadata).clone();
            try {
              await auth.authenticate(mdAttempt, timeoutMs, authOptions);
              patchedMd = mdAttempt;
              lLog.debug('Authentication successful');
              return true;
            } catch (e) {
              const canRetry =
                typeof auth.canRetry === 'function' ? auth.canRetry(e, authOptions) : false;
              const stillLeft = timeLeftMs(deadline);
              lLog.error('Authentication error', { err: e, canRetry, stillLeft });
              if (!canRetry || (stillLeft !== undefined && stillLeft <= 0)) {
                const st = {
                  code: Code.UNAUTHENTICATED.code,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  details: (e && (e as any).message) || 'authentication failed',
                  metadata: new GrpcMetadata(),
                };
                if (listener.onReceiveStatus) listener.onReceiveStatus(st, () => undefined);
                return false;
              }
            }
          }
        };

        doAuthLoop()
          .then((ok) => {
            if (ok) {
              aLog.trace('Starting call with authenticated metadata', { attempt });
              next(patchedMd ?? metadata, wrapped);
            } else {
              aLog.debug('Not starting call, authentication failed', { attempt });
            }
          })
          .catch((e) => {
            aLog.error('Error in authentication', { err: e });
            const st = {
              code: Code.UNAUTHENTICATED.code,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              details: (e && (e as any).message) || 'authentication failed',
              metadata: new GrpcMetadata(),
            };
            listener.onReceiveStatus && listener.onReceiveStatus(st, () => undefined);
          });
      },
      sendMessage(message: unknown, next: (message: unknown) => void) {
        aLog.trace('Sending message');
        next(message);
      },
      halfClose(next: () => void) {
        aLog.trace('Half-closing call');
        next();
      },
      cancel(next: () => void) {
        aLog.trace('Cancelling call');
        next();
      },
    } as const;

    return new InterceptingCall(nextCall(options), requester);
  };
}
