import { inspect } from 'util';

import { custom, customJson, inspectJson } from '../util/logging';

import type { Reader } from './service_account';
import { ServiceAccount } from './service_account';

export class StaticReader implements Reader {
  public readonly $type = 'nebius.sdk.StaticReader';
  constructor(private readonly sa: ServiceAccount) {}
  [custom](): string {
    return `Static(${inspect(this.sa)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      serviceAccount: inspectJson(this.sa),
    };
  }
  read(): ServiceAccount {
    return this.sa;
  }
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
