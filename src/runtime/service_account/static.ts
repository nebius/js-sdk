import type { Reader } from './service_account';
import { ServiceAccount } from './service_account';

export class StaticReader implements Reader {
  constructor(private readonly sa: ServiceAccount) {}
  read(): ServiceAccount {
    return this.sa;
  }
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
