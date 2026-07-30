/** Contains the default TLS endpoint suffix used by the conventional resolver. */
export const domain = 'api.nebius.cloud:443';
/** Contains the default Nebius CLI directory before home-directory expansion. */
export const defaultConfigDir = '~/.nebius';
/** Contains the configuration file name below {@link defaultConfigDir}. */
export const defaultConfigFile = 'config.yaml';
/** Contains the credentials file name below {@link defaultConfigDir}. */
export const defaultCredentialsFile = 'credentials.yaml';
/** Contains the environment-variable name for an explicit IAM bearer token. */
export const tokenEnv = 'NEBIUS_IAM_TOKEN'; // noqa: S105 equivalent in TS context
/** Contains the environment-variable name that selects a CLI profile. */
export const profileEnv = 'NEBIUS_PROFILE';
/** Contains the environment-variable name that overrides the API endpoint. */
export const endpointEnv = 'NEBIUS_ENDPOINT';
