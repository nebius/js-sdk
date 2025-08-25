import { spawn } from 'child_process';
import type { IncomingMessage } from 'http';
import { request as httpRequest } from 'http';
import { request as httpsRequest } from 'https';
import { URL } from 'url';

import { AUTH_ENDPOINT, TOKEN_ENDPOINT } from './constants';
import { isWsl } from './is_wsl';
import { PKCE } from './pkce';
import { CallbackHandler } from './server';

export interface GetTokenResult {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
  refresh_token?: string;
}

function httpsUrl(raw: string): string {
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
  return `https://${raw.replace(/^\/+/, '')}`;
}

async function openBrowser(url: string): Promise<void> {
  const platform = process.platform;
  if (platform === 'linux' && isWsl()) {
    spawn('powershell.exe', ['-NoProfile', '-NonInteractive', 'Start', url], {
      detached: true,
      stdio: 'ignore',
    }).unref();
    return;
  }
  if (platform === 'darwin') {
    spawn('open', [url], { detached: true, stdio: 'ignore' }).unref();
  } else if (platform === 'win32') {
    spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' }).unref();
  } else {
    spawn('xdg-open', [url], { detached: true, stdio: 'ignore' }).unref();
  }
}

function doHttpRequest(
  urlStr: string,
  method: string,
  headers: Record<string, string>,
  body?: string,
  tls?: { ca?: Buffer | string | string[] },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<{ status: number; data: any }> {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const isHttps = u.protocol === 'https:';
    const opts = {
      protocol: u.protocol,
      hostname: u.hostname,
      port: u.port || (isHttps ? 443 : 80),
      path: u.pathname + (u.search || ''),
      method,
      headers,
      // Pass CA bundle when using https
      ...(isHttps && tls?.ca ? { ca: tls.ca } : {}),
    };
    const req = (isHttps ? httpsRequest : httpRequest)(opts, (res: IncomingMessage) => {
      const chunks: Buffer[] = [];
      res.on('data', (c: Buffer) => chunks.push(c));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          data = text;
        }
        resolve({ status: res.statusCode || 0, data });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

export async function getCode(params: {
  clientId: string;
  authEndpoint: string;
  federationId: string;
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
}): Promise<{ code: string; state: string; redirectUri: string; verifier: string }> {
  const { clientId, authEndpoint, federationId, writer, noBrowserOpen, timeoutMs } = params;
  const pkce = new PKCE();
  const cb = new CallbackHandler();
  await cb.listenAndServe();
  const redirectUri = cb.addr; // e.g. http://127.0.0.1:port

  console.debug(`Callback handler listening at ${redirectUri}`);

  const base = new URL(AUTH_ENDPOINT, httpsUrl(authEndpoint));
  base.searchParams.set('response_type', 'code');
  base.searchParams.set('client_id', clientId);
  base.searchParams.set('scope', 'openid');
  base.searchParams.set('redirect_uri', redirectUri);
  base.searchParams.set('code_challenge', pkce.challenge);
  base.searchParams.set('code_challenge_method', pkce.method);
  base.searchParams.set('state', cb.state);
  if (federationId && federationId.length > 0) {
    base.searchParams.set('federation-id', federationId);
  }

  const url = base.toString();
  const write = writer ?? ((s: string) => console.log(s));
  write(`Open this URL to continue authentication: ${url}\n`);
  if (!noBrowserOpen) await openBrowser(url);

  const code = await cb.waitForCode(timeoutMs);
  await cb.shutdown();
  if (!code) throw new Error('Timeout waiting for authorization code');
  return { code, state: cb.state, redirectUri, verifier: pkce.verifier };
}

export async function getToken(params: {
  clientId: string;
  tokenEndpoint: string;
  code: string;
  redirectUri: string;
  verifier: string;
  ca?: Buffer | string | string[];
}): Promise<GetTokenResult> {
  const { clientId, tokenEndpoint, code, redirectUri, verifier, ca } = params;
  const url = new URL(TOKEN_ENDPOINT, httpsUrl(tokenEndpoint)).toString();
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: String(clientId),
    code: String(code),
    redirect_uri: String(redirectUri),
    code_verifier: String(verifier),
  }).toString();
  const res = await doHttpRequest(
    url,
    'POST',
    {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    body,
    { ca },
  );
  if (res.status < 200 || res.status >= 300) {
    throw new Error(
      `token endpoint error: status=${res.status}, body=${typeof res.data === 'string' ? res.data : JSON.stringify(res.data)}`,
    );
  }
  return res.data as GetTokenResult;
}

export async function authorize(params: {
  clientId: string;
  federationEndpoint: string;
  federationId: string;
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
  ca?: Buffer | string | string[];
}): Promise<GetTokenResult> {
  const { clientId, federationEndpoint, federationId, writer, noBrowserOpen, timeoutMs, ca } =
    params;
  const { code, redirectUri, verifier } = await getCode({
    clientId,
    authEndpoint: federationEndpoint,
    federationId,
    writer,
    noBrowserOpen,
    timeoutMs,
  });
  const res = await getToken({
    clientId,
    tokenEndpoint: federationEndpoint,
    code,
    redirectUri,
    verifier,
    ca,
  });
  return res;
}
