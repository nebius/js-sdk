export interface AuthorizationOptions {
  // Typed options for renewable/auth flows
  renewRequired?: boolean;
  renewSynchronous?: boolean;
  reportError?: boolean;
  renewRequestTimeoutMs?: number;
  maxRetries?: number;
}

export interface Authenticator {
  authenticate(
    metadata: import('@grpc/grpc-js').Metadata,
    timeoutMs?: number | undefined,
    options?: AuthorizationOptions | undefined,
  ): Promise<void>;
  canRetry?(err: unknown, options?: AuthorizationOptions | undefined): boolean;
}

export interface Provider {
  authenticator(): Authenticator;
  // Optional graceful shutdown for providers that manage resources
  close?(graceMs?: number | undefined): Promise<void>;
}
