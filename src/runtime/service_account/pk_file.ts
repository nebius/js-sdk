import { readFileSync } from 'fs';

import { custom, customJson, Logger } from '../util/logging.js';
import { resolveHomeDir } from '../util/path.js';
import { type Reader, ServiceAccount } from './service_account.js';

/**
 * Compatibility error type for unsupported private keys.
 *
 * {@link PkFileReader} does not currently throw this error. Key parsing or
 * signing can report another error when the SDK uses the key.
 */
export class WrongKeyTypeError extends Error {}

/**
 * Reads a PEM private key and combines it with service-account identifiers.
 *
 * Unlike
 * {@link https://nebius.github.io/js-sdk/classes/runtime_service_account_credentials_file.CredentialsFileReader.html | CredentialsFileReader},
 * this reader loads the private-key file each time {@link PkFileReader.read}
 * runs. Restrict access to the file because it contains a secret.
 */
export class PkFileReader implements Reader {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.PkFileReader';
  private readonly kid: string;
  private readonly said: string;
  private readonly filePath: string;

  /**
   * Creates a reader for a PEM file.
   *
   * A leading `~` in `filename` resolves to the home directory.
   */
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
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: this.$type,
      filePath: this.filePath,
      publicKeyId: this.kid,
      serviceAccountId: this.said,
    };
  }

  /** Reads the current PEM file and returns signing credentials. */
  read(): ServiceAccount {
    const pem = readFileSync(this.filePath, 'utf8');
    return new ServiceAccount(pem, this.kid, this.said, this.logger);
  }

  /** Returns the exchange token request. */
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
