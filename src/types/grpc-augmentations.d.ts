// Ambient type augmentation for @grpc/grpc-js CallOptions
// This file is included in the build via tsconfig "include".

import '@grpc/grpc-js';

// Use the SDK's AuthorizationOptions type for strongly typed options
import type { AuthorizationOptions } from '../runtime/authorization/provider';

declare module '@grpc/grpc-js' {
  interface CallOptions {
    // Disable SDK authorization entirely for this call
    authorizationDisable?: boolean;
    // Arbitrary options object passed to the authenticator
    authorizationOptions?: AuthorizationOptions | undefined;
  }
}
