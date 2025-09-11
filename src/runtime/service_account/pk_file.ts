import { readFileSync } from 'fs';

import { resolveHomeDir } from '../util/path';

import type { Reader } from './service_account';
import { ServiceAccount } from './service_account';

export class WrongKeyTypeError extends Error {}

export class PkFileReader implements Reader {
  private readonly pem: string;
  private readonly kid: string;
  private readonly said: string;

  constructor(filename: string, publicKeyId: string, serviceAccountId: string) {
    const path = resolveHomeDir(filename);
    this.pem = readFileSync(path, 'utf8');
    this.kid = publicKeyId;
    this.said = serviceAccountId;
  }

  read(): ServiceAccount {
    return new ServiceAccount(this.pem, this.kid, this.said);
  }

  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
