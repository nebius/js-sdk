import { readFileSync } from 'fs';

import { custom, customJson, Logger } from '../util/logging';
import { resolveHomeDir } from '../util/path';

import type { Reader } from './service_account';
import { ServiceAccount } from './service_account';

export class WrongKeyTypeError extends Error {}

export class PkFileReader implements Reader {
  public readonly $type = 'nebius.sdk.PkFileReader';
  private readonly kid: string;
  private readonly said: string;
  private readonly filePath: string;

  constructor(
    filename: string,
    publicKeyId: string,
    serviceAccountId: string,
    private logger?: Logger,
  ) {
    this.filePath = resolveHomeDir(filename);
    this.kid = publicKeyId;
    this.said = serviceAccountId;
  }
  [custom](): string {
    return `${this.$type}(filePath=${this.filePath}, serviceAccountId=${this.said}, publicKeyId=${this.kid})`;
  }
  [customJson](): object {
    return {
      type: this.$type,
      filePath: this.filePath,
      publicKeyId: this.kid,
      serviceAccountId: this.said,
    };
  }

  read(): ServiceAccount {
    const pem = readFileSync(this.filePath, 'utf8');
    return new ServiceAccount(pem, this.kid, this.said, this.logger);
  }

  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
