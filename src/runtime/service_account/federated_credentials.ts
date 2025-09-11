import fs from 'node:fs';

import { ExchangeTokenRequest } from '../../generated/nebius/iam/v1/index';
import { resolveHomeDir } from '../util/path';

import type { TokenRequester } from './service_account';

export interface FederatedCredentialsReader {
  credentials(): string;
}

export class FederatedCredentialsTokenRequester implements TokenRequester {
  constructor(
    public readonly serviceAccountId: string,
    public readonly credentials: FederatedCredentialsReader,
  ) {}

  getExchangeTokenRequest(): ExchangeTokenRequest {
    return ExchangeTokenRequest.create({
      grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
      requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
      subjectToken: this.serviceAccountId,
      subjectTokenType: 'urn:nebius:params:oauth:token-type:subject_identifier',
      actorTokenType: 'urn:ietf:params:oauth:token-type:jwt',
      actorToken: this.credentials.credentials(),
      scopes: [],
      audience: '',
      resource: [],
    });
  }
}

export class StaticFederatedCredentials implements FederatedCredentialsReader {
  constructor(private readonly _credentials: string) {}

  credentials(): string {
    return this._credentials;
  }
}

export class FileFederatedCredentials implements FederatedCredentialsReader {
  constructor(public readonly filePath: string) {}

  credentials(): string {
    const resolvedPath = resolveHomeDir(this.filePath);
    return fs.readFileSync(resolvedPath, { encoding: 'utf8' }).trim();
  }
}
