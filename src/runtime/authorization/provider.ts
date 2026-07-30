/**
 * Defines the authorization contracts used by SDK requests.
 *
 * Implement {@link Provider} and {@link Authenticator} only for a custom
 * authorization scheme. Most applications can pass a supported credential
 * source to the SDK.
 *
 * @packageDocumentation
 */

/**
 * Controls token renewal for one RPC.
 *
 * Most applications can use the defaults. These options are useful for a
 * request that must force a fresh token or report a renewal error immediately.
 */
export interface AuthorizationOptions {
  /**
   * Requests renewal.
   *
   * A valid cached token can still be returned unless
   * {@link AuthorizationOptions.renewSynchronous} or
   * {@link AuthorizationOptions.reportError} makes the caller wait for the
   * renewal result.
   */
  renewRequired?: boolean;
  /** Waits for forced renewal before the RPC starts. */
  renewSynchronous?: boolean;
  /** Rejects the authentication attempt when renewal fails instead of using a valid cached token. */
  reportError?: boolean;
  /** Sets the timeout for the underlying renewal request, in milliseconds. */
  renewRequestTimeoutMs?: number;
  /**
   * Sets the maximum interceptor authentication attempts for this RPC.
   *
   * A credential source can perform separate inner or background attempts.
   */
  maxRetries?: number;
}

/**
 * Adds credentials to RPC metadata.
 *
 * Implement this interface only for a custom authorization scheme. Token-based
 * applications can use
 * {@link https://nebius.github.io/js-sdk/classes/runtime_authorization_token.TokenProvider.html | TokenProvider}
 * and a concrete bearer.
 */
export interface Authenticator {
  /** Adds authorization data to the request metadata. */
  authenticate(
    metadata: import('@grpc/grpc-js').Metadata,
    timeoutMs?: number | undefined,
    options?: AuthorizationOptions | undefined,
  ): Promise<void>;
  /** Returns whether the retry is allowed. */
  canRetry?(err: unknown, options?: AuthorizationOptions | undefined): boolean;
}

/**
 * Creates an authenticator for each RPC.
 *
 * A provider can own credential resources. The SDK calls
 * {@link Provider.close} during shutdown when the method is present.
 */
export interface Provider {
  /** Returns the configured authenticator. */
  authenticator(): Authenticator;
  /** Closes resources that the provider owns. */
  close?(graceMs?: number | undefined): Promise<void>;
}
