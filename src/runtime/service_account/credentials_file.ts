import { readFileSync } from 'fs';
import { inspect } from 'util';

import { custom, customJson, inspectJson, Logger } from '../util/logging.js';
import { resolveHomeDir } from '../util/path.js';
import { type Reader, ServiceAccount } from './service_account.js';

interface SubjectCredentials {
  type?: string; // should be 'JWT' or empty
  alg: string; // must be 'RS256'
  'private-key': string; // PEM
  kid: string; // key id
  iss: string; // issuer
  sub: string; // subject, must equal iss
}

interface ServiceAccountCredentialsFile {
  'subject-credentials': SubjectCredentials;
}

function validateSubjectCredentials(sc: SubjectCredentials) {
  const type = sc.type ?? '';
  if (type !== '' && type !== 'JWT') {
    throw new Error(
      `Invalid service account credentials type: '${type}', only 'JWT' is supported.`,
    );
  }
  if (sc.alg !== 'RS256') {
    throw new Error(`Invalid service account algorithm: '${sc.alg}', only 'RS256' is supported.`);
  }
  if (sc.iss !== sc.sub) {
    throw new Error(`Issuer must be the same as subject: '${sc.iss}' != '${sc.sub}'.`);
  }
}

/**
 * Loads a Nebius service-account credentials JSON file.
 *
 * The constructor reads the file immediately. It validates the algorithm,
 * credential type, and equality of issuer and subject. Missing or malformed
 * key identifiers and private-key values can fail later when the SDK signs or
 * exchanges a token. Keep the file private because it contains the private key.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { CredentialsFileReader } from '@nebius/js-sdk/runtime/service_account/credentials_file';
 *
 * const sdk = new SDK({
 *   // Passing the reader lets SDK create and connect the token-exchange flow.
 *   credentials: new CredentialsFileReader(
 *     '~/.config/nebius/service-account.json',
 *   ),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class CredentialsFileReader implements Reader {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.CredentialsFileReader';
  private readonly sc: SubjectCredentials;
  private readonly pem: string;
  private readonly path: string;

  /** Reads `filename`; a leading `~` resolves to the home directory. */
  constructor(
    filename: string,
    private logger?: Logger,
  ) {
    this.path = resolveHomeDir(filename);
    const raw = readFileSync(this.path, 'utf8');
    const parsed = JSON.parse(raw) as ServiceAccountCredentialsFile;
    const sc = parsed['subject-credentials'];
    if (!sc) throw new Error('Missing subject-credentials section');
    validateSubjectCredentials(sc);
    this.sc = sc;
    this.pem = sc['private-key'];
  }
  [custom](): string {
    return `${this.$type}(path=${this.path}, sa=${inspect(this.read())})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: this.$type,
      path: this.path,
      serviceAccount: inspectJson(this.read()),
    };
  }

  /** Creates a service-account value from the credentials held in memory. */
  read(): ServiceAccount {
    return new ServiceAccount(this.pem, this.sc.kid, this.sc.sub, this.logger);
  }

  /** Returns the exchange token request. */
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
