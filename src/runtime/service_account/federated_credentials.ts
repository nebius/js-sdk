import fs from 'node:fs';
import { inspect } from 'node:util';

import { ExchangeTokenRequest } from '../../api/nebius/iam/v1/index.js';
import type { TokenRequester } from '../token/exchangeable.js';
import { TokenSanitizer } from '../token_sanitizer.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';
import { resolveHomeDir } from '../util/path.js';

/**
 * Supplies an external identity credential for service-account federation.
 *
 * The returned string is secret and can change between calls.
 */
export interface FederatedCredentialsReader {
  /** Returns the configured credentials. */
  credentials(): string;
}

/**
 * Builds a token-exchange request from an external credential and a target
 * service-account ID.
 *
 * The reader is called for every request, so file-backed credentials can
 * rotate without recreating this object.
 */
export class FederatedCredentialsTokenRequester implements TokenRequester {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.FederatedCredentialsTokenRequester';
  /** Creates a requester for the target service account and credential source. */
  constructor(
    /** ID of the service account that the external identity can act as. */ public readonly serviceAccountId: string,
    /** Source of the current external credential. */ public readonly credentials: FederatedCredentialsReader,
    private logger?: Logger,
  ) {}
  [custom](): string {
    return `${this.$type}(serviceAccountId=${this.serviceAccountId}, credentials=${inspect(this.credentials)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: this.$type,
      serviceAccountId: this.serviceAccountId,
      credentials: inspectJson(this.credentials),
    };
  }

  /** Returns the exchange token request. */
  getExchangeTokenRequest(): ExchangeTokenRequest {
    const credentials = this.credentials.credentials();
    const sanitizedCredentials = TokenSanitizer.credentialsSanitizer().sanitize(credentials);
    this.logger?.trace('creating ExchangeTokenRequest using federated credentials', {
      serviceAccountId: this.serviceAccountId,
      credentials: sanitizedCredentials,
    });
    return ExchangeTokenRequest.create({
      grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
      requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
      subjectToken: this.serviceAccountId,
      subjectTokenType: 'urn:nebius:params:oauth:token-type:subject_identifier',
      actorTokenType: 'urn:ietf:params:oauth:token-type:jwt',
      actorToken: credentials,
      scopes: [],
      audience: '',
      resource: [],
    });
  }
}

/**
 * Keeps one external federation credential in memory.
 *
 * Use this for a short-lived process. Use {@link FileFederatedCredentials}
 * when another process can rotate the credential.
 */
export class StaticFederatedCredentials implements FederatedCredentialsReader {
  /** Stores the credential. Treat the input and return value as secrets. */
  constructor(private readonly _credentials: string) {}

  [custom](): string {
    const sanitizedCredentials = TokenSanitizer.credentialsSanitizer().sanitize(this._credentials);
    return `StaticFederatedCredentials(credentials=${sanitizedCredentials})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    const sanitizer = TokenSanitizer.credentialsSanitizer();
    return {
      type: 'StaticFederatedCredentials',
      credentials: sanitizer.sanitize(this._credentials),
    };
  }

  /** Returns the configured credentials. */
  credentials(): string {
    return this._credentials;
  }
}

/**
 * Reads an external federation credential from a text file on each call.
 *
 * Leading and trailing whitespace is removed. A leading `~` resolves to the
 * home directory. Protect the file from other users.
 *
 * @example
 * ```ts
 * import { FileFederatedCredentials } from '@nebius/js-sdk/runtime/service_account/federated_credentials';
 *
 * const source = new FileFederatedCredentials('~/.config/my-app/workload-token');
 * ```
 */
export class FileFederatedCredentials implements FederatedCredentialsReader {
  /** Contains the credentials file path. */
  public readonly filePath: string;

  /** Creates a new file federated credentials. */
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  [custom](): string {
    return `FileFederatedCredentials(filePath=${this.filePath})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'FileFederatedCredentials',
      filePath: this.filePath,
    };
  }

  /** Reads and returns the current credential. Treat the result as a secret. */
  credentials(): string {
    const resolvedPath = resolveHomeDir(this.filePath);
    return fs.readFileSync(resolvedPath, { encoding: 'utf8' }).trim();
  }
}
