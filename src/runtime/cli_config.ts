import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { parse as parseYAML } from 'yaml';

import type { ConfigReaderLike, Credentials, GetCredentialsOptions } from './cli_config_interfaces';
import {
  defaultConfigDir,
  defaultConfigFile,
  profileEnv as PROFILE_ENV,
  tokenEnv as TOKEN_ENV,
} from './constants';
import { CredentialsFileReader } from './service_account/credentials_file';
import { PkFileReader } from './service_account/pk_file';
import { FederatedCredentialsBearer } from './token/federated_credentials';
import { FederationAccountBearer } from './token/federation_account';
import { FileBearer } from './token/file';
import { ServiceAccountBearer } from './token/service_account';
import { EnvBearer, NoTokenInEnvError } from './token/static';

export class ConfigError extends Error {}
export class NoParentIdError extends ConfigError {}

function expandHome(p: string): string {
  return resolve(p.replace(/^~\//, `${process.env.HOME || ''}/`));
}

// (no-op) helper types removed

export interface ConfigOptions {
  clientId?: string;
  configFile?: string;
  profile?: string | null;
  profileEnv?: string;
  tokenEnv?: string;
  noEnv?: boolean;
  noParentId?: boolean;
  maxRetries?: number;
}

export class Config implements ConfigReaderLike {
  private readonly _clientId: string | undefined;
  private _priorityBearer: EnvBearer | null = null;
  private _profileName: string | null;
  private readonly _noParentId: boolean;
  private readonly _configFile: string;
  private _endpoint: string | undefined;
  private readonly _maxRetries: number;
  private _profile!: Record<string, unknown>;

  constructor(options: ConfigOptions = {}) {
    const {
      clientId,
      configFile = `${defaultConfigDir}/${defaultConfigFile}`,
      profile = null,
      profileEnv = PROFILE_ENV,
      tokenEnv = TOKEN_ENV,
      noEnv = false,
      noParentId = false,
      maxRetries = 2,
    } = options;

    this._clientId = clientId;
    this._profileName = profile ?? null;

    if (!noEnv) {
      try {
        this._priorityBearer = new EnvBearer(tokenEnv);
      } catch (e) {
        if (!(e instanceof NoTokenInEnvError)) throw e;
      }
      if (this._profileName == null) {
        const fromEnv = process.env[profileEnv];
        this._profileName = fromEnv && fromEnv.trim() !== '' ? fromEnv : null;
      }
    }

    this._noParentId = noParentId;
    this._configFile = expandHome(configFile);
    this._endpoint = undefined;
    this._maxRetries = maxRetries;

    this._getProfile();
  }

  parentId(): string | undefined {
    if (this._noParentId) {
      throw new NoParentIdError('Config is set to not use parent id from the profile.');
    }
    if (!('parent-id' in this._profile)) {
      throw new NoParentIdError('Missing parent-id in the profile.');
    }
    const pid = this._profile['parent-id'];
    if (typeof pid !== 'string') {
      throw new ConfigError(`Parent id should be a string, got ${typeof pid}.`);
    }
    if (pid.trim() === '') {
      throw new NoParentIdError('Parent id is empty.');
    }
    return pid;
  }

  endpoint(): string | undefined {
    return this._endpoint;
  }

  getCredentials(opts: GetCredentialsOptions = {}): Credentials {
    if (this._priorityBearer) return this._priorityBearer;

    if ('token-file' in this._profile) {
      const tf = this._profile['token-file'];
      if (typeof tf !== 'string') {
        throw new ConfigError(`Token file should be a string, got ${typeof tf}.`);
      }
      return new FileBearer(tf);
    }

    if (!('auth-type' in this._profile)) {
      throw new ConfigError('Missing auth-type in the profile.');
    }
    const authType = this._profile['auth-type'];

    if (authType === 'federation') {
      if (!('federation-endpoint' in this._profile)) {
        throw new ConfigError('Missing federation-endpoint in the profile.');
      }
      const endpoint = this._profile['federation-endpoint'];
      if (typeof endpoint !== 'string') {
        throw new ConfigError(`Federation endpoint should be a string, got ${typeof endpoint}.`);
      }
      if (!('federation-id' in this._profile)) {
        throw new ConfigError('Missing federation-id in the profile.');
      }
      const fedId = this._profile['federation-id'];
      if (typeof fedId !== 'string') {
        throw new ConfigError(`Federation id should be a string, got ${typeof fedId}.`);
      }

      const profileName = this._profileName ?? 'default';
      const { writer, noBrowserOpen, timeoutMs } = opts;

      // Optionally supply TLS roots from SDK (so HTTP federation uses same trust as gRPC)
      let ca: Buffer | string | string[] | undefined;
      interface TlsRootsSource {
        getTlsRootCAs?: () => Buffer | string | string[];
      }
      const sdkMaybe = opts.sdk as unknown as TlsRootsSource | null;
      if (sdkMaybe && typeof sdkMaybe.getTlsRootCAs === 'function') {
        ca = sdkMaybe.getTlsRootCAs();
      }

      // console.debug(
      //   `Creating FederationAccountBearer with profile ${profileName}, client_id`+
      //   ` ${this._clientId}, federation_url ${endpoint}, federation_id ${fedId},`+
      //   ` writer ${!!writer}, no_browser_open ${!!noBrowserOpen}.`,
      // );
      if (!this._clientId) {
        throw new ConfigError('Client ID is required for FederationAccountBearer.');
      }

      return new FederationAccountBearer(profileName, this._clientId, endpoint, fedId, {
        writer,
        noBrowserOpen: !!noBrowserOpen,
        timeoutMs,
        maxRetries: this._maxRetries,
        ca,
      });
    }

    if (authType === 'service account') {
      // Possible sources (priority):
      // 1) federated-subject-credentials-file-path + service-account-id
      // 2) service-account-credentials-file-path
      // 3) inline private-key with service-account-id + public-key-id
      // 4) private-key-file-path with service-account-id + public-key-id

      // Optional service account id (used by paths 1,3,4)
      let saId: string | null = null;
      if ('service-account-id' in this._profile) {
        const v = this._profile['service-account-id'];
        if (typeof v !== 'string') {
          throw new ConfigError(`Service account should be a string, got ${typeof v}.`);
        }
        saId = v;
      }

      // 1) federated subject credentials file
      if (saId && 'federated-subject-credentials-file-path' in this._profile) {
        const fpath = this._profile['federated-subject-credentials-file-path'];
        if (typeof fpath !== 'string') {
          throw new ConfigError('federated-subject-credentials-file-path should be a string');
        }
        return new FederatedCredentialsBearer(fpath, {
          serviceAccountId: saId,
          sdk: opts.sdk ?? null,
          maxRetries: this._maxRetries,
        });
      }

      // 2) service account credentials file
      if ('service-account-credentials-file-path' in this._profile) {
        const cpath = this._profile['service-account-credentials-file-path'];
        if (typeof cpath !== 'string') {
          throw new ConfigError('service-account-credentials-file-path should be a string');
        }
        return new ServiceAccountBearer(new CredentialsFileReader(cpath), {
          sdk: opts.sdk ?? null,
          maxRetries: this._maxRetries,
        });
      }

      // For inline/private-key-file paths we need saId and public key id
      if (!saId) {
        throw new ConfigError('Missing service-account-id in the profile.');
      }
      if (!('public-key-id' in this._profile)) {
        throw new ConfigError('Missing public-key-id in the profile.');
      }
      const pkId = this._profile['public-key-id'];
      if (typeof pkId !== 'string') {
        throw new ConfigError(`Public key should be a string, got ${typeof pkId}.`);
      }

      // 3) inline private key
      if ('private-key' in this._profile) {
        const privateKeyPem = this._profile['private-key'];
        if (typeof privateKeyPem !== 'string') {
          throw new ConfigError(`Private key should be a string, got ${typeof privateKeyPem}.`);
        }
        return new ServiceAccountBearer(saId, {
          publicKeyId: pkId,
          privateKeyPem,
          sdk: opts.sdk ?? null,
          maxRetries: this._maxRetries,
        });
      }

      // 4) private key file path
      if ('private-key-file-path' in this._profile) {
        const ppath = this._profile['private-key-file-path'];
        if (typeof ppath !== 'string') {
          throw new ConfigError('private-key-file-path should be a string');
        }
        return new ServiceAccountBearer(new PkFileReader(ppath, pkId, saId), {
          sdk: opts.sdk ?? null,
          maxRetries: this._maxRetries,
        });
      }

      // Nothing matched
      throw new ConfigError(
        'Incomplete service account configuration: provide either (service-account-id and federated-subject-credentials-file-path) OR (service-account-credentials-file-path) OR (service-account-id, public-key-id and one of private-key / private-key-file-path)',
      );
    }

    throw new ConfigError(`Unsupported auth-type ${String(authType)} in the profile.`);
  }

  private _getProfile(): void {
    // Validate file exists
    if (!existsSync(this._configFile)) {
      throw new Error(`Config file ${this._configFile} not found.`);
    }

    const raw = readFileSync(this._configFile, 'utf8');
    const parsed = parseYAML(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') {
      throw new ConfigError('Invalid config file format.');
    }
    const cfgObj = parsed as Record<string, unknown>;
    const profilesUnknown = cfgObj.profiles as unknown;
    if (profilesUnknown === undefined) {
      throw new ConfigError('No profiles found in the config file.');
    }
    if (
      typeof profilesUnknown !== 'object' ||
      profilesUnknown === null ||
      Array.isArray(profilesUnknown)
    ) {
      throw new ConfigError(`Profiles should be a dictionary, got ${typeof profilesUnknown}.`);
    }
    const profiles = profilesUnknown as Record<string, unknown>;
    if (Object.keys(profiles).length === 0) {
      throw new ConfigError(
        'No profiles found in the config file, setup the nebius CLI profile first.',
      );
    }

    if (this._profileName == null) {
      const def = cfgObj.default as unknown;
      if (def === undefined || def === null) {
        const keys = Object.keys(profiles);
        if (keys.length === 1) {
          this._profileName = keys[0];
        } else {
          throw new ConfigError('No default profile found in the config file.');
        }
      } else {
        this._profileName = String(def as string);
      }

      if (this._profileName == null) {
        throw new ConfigError(
          'No profile selected. Either set the profile in the config setup, set the env var NEBIUS_PROFILE or execute `nebius profile activate`.',
        );
      }
    }

    const profile = this._profileName;
    if (typeof profile !== 'string') {
      throw new ConfigError(`Profile name should be a string, got ${typeof profile}.`);
    }
    if (!(profile in profiles)) {
      throw new ConfigError(`Profile ${profile} not found in the config file.`);
    }
    const profVal = profiles[profile];
    if (typeof profVal !== 'object' || profVal === null || Array.isArray(profVal)) {
      throw new ConfigError(`Profile ${profile} should be a dictionary, got ${typeof profVal}.`);
    }
    this._profile = profVal as Record<string, unknown>;

    if ('endpoint' in this._profile) {
      const ep = this._profile['endpoint'];
      if (typeof ep !== 'string') {
        throw new ConfigError(`Endpoint should be a string, got ${typeof ep}.`);
      }
      this._endpoint = ep;
    }
  }
}
