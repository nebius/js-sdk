import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  metricStart,
} from '../../metrics.js';
import { Bearer, Receiver, Token } from '../../token.js';
import { TokenSanitizer } from '../../token_sanitizer.js';
import { custom, customJson, Logger } from '../../util/logging.js';
import { authorize } from './auth.js';

import type { AuthorizationOptions } from '../../authorization/provider.js';

class FederationReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.FederationReceiver';
  constructor(
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
    private readonly logger?: Logger,
    private readonly metrics: AuthMetricsRecorder = authMetricsRecorder(undefined, 'federation'),
  ) {
    super();
  }
  [custom](): string {
    return `${this.$type}(clientId=${this.clientId}, federationEndpoint=${this.federationEndpoint}, federationId=${this.federationId}, noBrowserOpen=${this.noBrowserOpen})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      noBrowserOpen: this.noBrowserOpen,
      writer: this.writer ? 'provided' : 'none',
      ca: this.ca ? 'provided' : 'none',
    };
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const start = metricStart();
    const startWallMs = Date.now();
    this.logger?.debug('receiver._fetch: start', { timeoutMs, start: startWallMs });
    try {
      const res = await authorize({
        clientId: this.clientId,
        federationEndpoint: this.federationEndpoint,
        federationId: this.federationId,
        writer: this.writer,
        noBrowserOpen: this.noBrowserOpen,
        timeoutMs:
          timeoutMs === undefined ? undefined : Math.max(0, timeoutMs - (Date.now() - startWallMs)),
        ca: this.ca,
        logger: this.logger?.child('auth'),
      });
      this.logger?.trace('receiver._fetch: authorize result', {
        expires_in: res?.expires_in,
        access_token: TokenSanitizer.accessTokenSanitizer().sanitize(res?.access_token),
      });
      if (!res || typeof res.access_token !== 'string' || typeof res.expires_in !== 'number') {
        throw new Error('invalid token response');
      }
      const expiration =
        res.expires_in > 0 ? new Date(Date.now() + res.expires_in * 1000) : undefined;
      const tok = new Token(res.access_token, expiration);
      this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), 1);
      this.metrics.tokenLifetime(tok);
      this.logger?.debug('receiver._fetch: received token', { token: tok });
      return tok;
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), 1);
      throw err;
    }
  }

  canRetry(_err: unknown, _options?: AuthorizationOptions | undefined): boolean {
    this.logger?.debug('receiver.canRetry -> false');
    return false;
  }
}

/**
 * Runs one interactive OAuth federation login.
 *
 * This low-level bearer starts a loopback HTTP callback server and opens the
 * authorization URL in a browser. Set `noBrowserOpen` when the user must open
 * the URL manually. It does not cache or renew the returned token; normal SDK
 * configuration uses
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_federation_account.FederationAccountBearer.html | FederationAccountBearer}
 * for those features.
 */
export class FederationBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.FederationBearer';
  private readonly logger?: Logger;
  private readonly metrics: AuthMetricsRecorder;
  /**
   * Creates an interactive login source.
   *
   * `writer` receives the authorization URL. The default writer uses
   * `console.log`. `ca` adds a trusted CA certificate for the token request.
   */
  constructor(
    private readonly profileName: string,
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
    logger?: Logger,
    metrics?: AuthMetricsInput,
  ) {
    super();
    this.metrics = authMetricsRecorder(metrics, 'federation');
    this.logger = logger?.withFields({
      profile: profileName,
      federationEndpoint,
      federationId,
      clientId,
    });
    this.logger?.trace('bearer: created');
  }

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
  [custom](): string {
    return `${this.$type}(profileName=${this.profileName}, clientId=${this.clientId}, federationEndpoint=${this.federationEndpoint}, federationId=${this.federationId}, noBrowserOpen=${this.noBrowserOpen})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      profileName: this.profileName,
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      noBrowserOpen: this.noBrowserOpen,
    };
  }

  /** Returns the credential name. */
  get name(): string | undefined {
    return `federation/${this.federationEndpoint}/${this.federationId}/${this.profileName}`;
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    this.logger?.trace('bearer.receiver');
    return new FederationReceiver(
      this.clientId,
      this.federationEndpoint,
      this.federationId,
      this.writer,
      this.noBrowserOpen,
      this.ca,
      this.logger,
      this.metrics,
    );
  }
}
