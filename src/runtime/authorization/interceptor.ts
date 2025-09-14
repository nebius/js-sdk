import type { CallOptions, InterceptingCall, Interceptor, Listener, Metadata } from '@grpc/grpc-js';
import { Metadata as GrpcMetadata } from '@grpc/grpc-js';

import { Code } from '../../api/google/rpc/index';
import { Logger } from '../util/logging';

import type { Provider } from './provider';

function timeLeftMs(deadline: CallOptions['deadline']): number | undefined {
  if (!deadline) return undefined;
  const now = Date.now();
  if (deadline instanceof Date) return Math.max(0, deadline.getTime() - now);
  if (typeof deadline === 'number') return Math.max(0, deadline - now);
  return undefined;
}

// Interceptor that authenticates with a retry loop before starting the call.
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
          // Loop until authenticated or timeout
          // If canRetry is not provided, single attempt
          // Always start from the original metadata to avoid duplicating headers between attempts
          while (true) {
            attempt += 1;
            const left = timeLeftMs(deadline);
            const timeoutMs = left === undefined ? undefined : Math.max(0, left);
            const lLog = aLog.withFields({ attempt, left, timeoutMs });
            lLog.debug('Authentication attempt');
            // Clone original metadata so we don't mutate it and to prevent header duplication on retries
            const mdAttempt = (metadata as GrpcMetadata).clone();
            try {
              await auth.authenticate(mdAttempt, timeoutMs, authOptions);
              patchedMd = mdAttempt;
              lLog.debug('Authentication successful');
              return true; // success
            } catch (e) {
              const canRetry =
                typeof auth.canRetry === 'function' ? auth.canRetry(e, authOptions) : false;
              const stillLeft = timeLeftMs(deadline);
              lLog.error('Authentication error', { err: e, canRetry, stillLeft });
              if (!canRetry || (stillLeft !== undefined && stillLeft <= 0)) {
                // Fail early with UNAUTHENTICATED-like status
                const st = {
                  code: Code.UNAUTHENTICATED.code,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  details: (e && (e as any).message) || 'authentication failed',
                  metadata: new GrpcMetadata(),
                };
                // Send status to the provided listener and do not start the call
                if (listener.onReceiveStatus) listener.onReceiveStatus(st, () => undefined);
                return false;
              }
              // retry, continue loop
            }
          }
        };

        doAuthLoop()
          .then((ok) => {
            // If doAuthLoop finished successfully, start the call with patched metadata
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

    return new (require('@grpc/grpc-js').InterceptingCall as typeof InterceptingCall)(
      nextCall(options),
      requester,
    );
  };
}
