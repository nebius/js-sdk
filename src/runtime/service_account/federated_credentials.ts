import fs from 'node:fs';
import { inspect } from 'node:util';

import { ExchangeTokenRequest } from '../../api/nebius/iam/v1/index';
import type { TokenRequester } from '../token/exchangeable';
import { TokenSanitizer } from '../token_sanitizer';
import { custom, customJson, inspectJson, Logger } from '../util/logging';
import { resolveHomeDir } from '../util/path';

export interface FederatedCredentialsReader {
  credentials(): string;
}

export class FederatedCredentialsTokenRequester implements TokenRequester {
  public readonly $type = 'nebius.sdk.FederatedCredentialsTokenRequester';
  constructor(
    public readonly serviceAccountId: string,
    public readonly credentials: FederatedCredentialsReader,
    private logger?: Logger,
  ) {}
  [custom](): string {
    return `${this.$type}(serviceAccountId=${this.serviceAccountId}, credentials=${inspect(this.credentials)})`;
  }
  [customJson](): object {
    return {
      type: this.$type,
      serviceAccountId: this.serviceAccountId,
      credentials: inspectJson(this.credentials),
    };
  }

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

export class StaticFederatedCredentials implements FederatedCredentialsReader {
  constructor(private readonly _credentials: string) {}

  [custom](): string {
    const sanitizedCredentials = TokenSanitizer.credentialsSanitizer().sanitize(this._credentials);
    return `StaticFederatedCredentials(credentials=${sanitizedCredentials})`;
  }
  [customJson](): object {
    const sanitizer = TokenSanitizer.credentialsSanitizer();
    return {
      type: 'StaticFederatedCredentials',
      credentials: sanitizer.sanitize(this._credentials),
    };
  }

  credentials(): string {
    return this._credentials;
  }
}

export class FileFederatedCredentials implements FederatedCredentialsReader {
  constructor(public readonly filePath: string) {}

  [custom](): string {
    return `FileFederatedCredentials(filePath=${this.filePath})`;
  }
  [customJson](): object {
    return {
      type: 'FileFederatedCredentials',
      filePath: this.filePath,
    };
  }

  credentials(): string {
    const resolvedPath = resolveHomeDir(this.filePath);
    return fs.readFileSync(resolvedPath, { encoding: 'utf8' }).trim();
  }
}
