import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { parse as parseYAML } from 'yaml';

import { defaultConfigDir, defaultConfigFile, profileEnv as PROFILE_ENV, tokenEnv as TOKEN_ENV } from './constants';
import type { SDKInterface, ConfigReaderLike } from '../sdk';
import type { Provider as AuthorizationProvider } from './authorization/provider';
import { Bearer, Token } from './token';
import { EnvBearer, NoTokenInEnvError } from './token/static';
import { FileBearer } from './token/file';
import { FederationAccountBearer } from './token/federation_account';
import type { Reader as TokenRequestReader } from './service_account/service_account';
import { ServiceAccountBearer } from './token/service_account';

export type Credentials = AuthorizationProvider | Bearer | TokenRequestReader | Token | string;

export class ConfigError extends Error {}
export class NoParentIdError extends ConfigError {}

function expandHome(p: string): string {
  return resolve(p.replace(/^~\//, `${process.env.HOME || ''}/`));
}

interface ProfilesFileShape {
  default?: string | null;
  profiles?: Record<string, any>;
}

export interface GetCredentialsOptions {
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
  sslCtxUnused?: unknown; // placeholder to mirror Python signature
  sdk?: SDKInterface | Promise<SDKInterface> | null;
}

export class Config implements ConfigReaderLike {
  private readonly _clientId: string;
  private _priorityBearer: EnvBearer | null = null;
  private _profileName: string | null;
  private readonly _noParentId: boolean;
  private readonly _configFile: string;
  private _endpoint: string | undefined;
  private readonly _maxRetries: number;
  private _profile!: Record<string, any>;

  constructor(
    clientId: string,
    configFile: string = `${defaultConfigDir}/${defaultConfigFile}`,
    profile?: string | null,
    profileEnv: string = PROFILE_ENV,
    tokenEnv: string = TOKEN_ENV,
    noEnv: boolean = false,
    noParentId: boolean = false,
    maxRetries: number = 2,
  ) {
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
        this._profileName = (fromEnv && fromEnv.trim() !== '') ? fromEnv : null;
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

      // eslint-disable-next-line no-console
      console.debug(
        `Creating FederationAccountBearer with profile ${profileName}, client_id ${this._clientId}, federation_url ${endpoint}, federation_id ${fedId}, writer ${!!writer}, no_browser_open ${!!noBrowserOpen}.`,
      );

      return new FederationAccountBearer(profileName, this._clientId, endpoint, fedId, {
        writer,
        noBrowserOpen: !!noBrowserOpen,
        timeoutMs,
        maxRetries: this._maxRetries,
      });
    }

    if (authType === 'service account') {
      if (!('service-account-id' in this._profile)) {
        throw new ConfigError('Missing service-account-id in the profile.');
      }
      const saId = this._profile['service-account-id'];
      if (typeof saId !== 'string') {
        throw new ConfigError(`Service account should be a string, got ${typeof saId}.`);
      }
      if (!('public-key-id' in this._profile)) {
        throw new ConfigError('Missing public-key-id in the profile.');
      }
      const pkId = this._profile['public-key-id'];
      if (typeof pkId !== 'string') {
        throw new ConfigError(`Public key should be a string, got ${typeof pkId}.`);
      }
      if (!('private-key' in this._profile)) {
        throw new ConfigError('Missing private-key in the profile.');
      }
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

    throw new ConfigError(`Unsupported auth-type ${String(authType)} in the profile.`);
  }

  private _getProfile(): void {
    // Validate file exists
    if (!existsSync(this._configFile)) {
      throw new Error(`Config file ${this._configFile} not found.`);
    }

    const raw = readFileSync(this._configFile, 'utf8');
    const config = parseYAML(raw) as ProfilesFileShape | Record<string, any> | undefined;
    if (!config || typeof config !== 'object') {
      throw new ConfigError('Invalid config file format.');
    }

    const profiles = (config as any).profiles;
    if (profiles === undefined) {
      throw new ConfigError('No profiles found in the config file.');
    }
    if (typeof profiles !== 'object' || profiles === null || Array.isArray(profiles)) {
      throw new ConfigError(`Profiles should be a dictionary, got ${typeof profiles}.`);
    }
    if (Object.keys(profiles).length === 0) {
      throw new ConfigError('No profiles found in the config file, setup the nebius CLI profile first.');
    }

    if (this._profileName == null) {
      const def = (config as any).default;
      if (def === undefined || def === null) {
        const keys = Object.keys(profiles);
        if (keys.length === 1) {
          this._profileName = keys[0];
        } else {
          throw new ConfigError('No default profile found in the config file.');
        }
      } else {
        this._profileName = String(def);
      }

      if (this._profileName == null) {
        throw new ConfigError('No profile selected. Either set the profile in the config setup, set the env var NEBIUS_PROFILE or execute `nebius profile activate`.');
      }
    }

    const profile = this._profileName;
    if (typeof profile !== 'string') {
      throw new ConfigError(`Profile name should be a string, got ${typeof profile}.`);
    }
    if (!(profile in profiles)) {
      throw new ConfigError(`Profile ${profile} not found in the config file.`);
    }
    if (typeof profiles[profile] !== 'object' || profiles[profile] === null || Array.isArray(profiles[profile])) {
      throw new ConfigError(`Profile ${profile} should be a dictionary, got ${typeof profiles[profile]}.`);
    }
    this._profile = profiles[profile] as Record<string, any>;

    if ('endpoint' in this._profile) {
      const ep = this._profile['endpoint'];
      if (typeof ep !== 'string') {
        throw new ConfigError(`Endpoint should be a string, got ${typeof ep}.`);
      }
      this._endpoint = ep;
    }
  }
}
