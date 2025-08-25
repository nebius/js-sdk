import { createServer, Server } from 'http';
import { AddressInfo } from 'net';
import { URL } from 'url';

import { PKCE } from './pkce';

export class CallbackHandler {
  private _code: string | null = null;
  private _state: string = new PKCE().verifier;
  private _server: Server | null = null;
  private _addr: string | null = null;

  get state(): string {
    return this._state;
  }
  get code(): string | null {
    return this._code;
  }
  get addr(): string {
    if (!this._addr) throw new Error('not started');
    return this._addr;
  }

  async listenAndServe(): Promise<void> {
    if (this._server) return;
    this._server = createServer((req, res) => {
      try {
        const u = new URL(req.url || '/', `http://${req.headers.host}`);
        if (u.pathname === '/') {
          const code = u.searchParams.get('code');
          const state = u.searchParams.get('state');
          this._setCode(code, state);
          if (this._code && state === this._state) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Login successful. You may close this tab.');
            return;
          }
          res.statusCode = 400;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Login is not successful, please try again.');
          return;
        }
        res.statusCode = 404;
        res.end('Not found');
      } catch (e) {
        res.statusCode = 500;
        res.end('Internal error');
      }
    });
    await new Promise<void>((resolve) => this._server!.listen(0, '127.0.0.1', () => resolve()));
    const addr = this._server.address() as AddressInfo;
    this._addr = `http://127.0.0.1:${addr.port}`;
  }

  private _setCode(code: string | null, state: string | null) {
    if (code && state === this._state) {
      this._code = code;
    }
  }

  async shutdown(): Promise<void> {
    if (!this._server) return;
    await new Promise<void>((resolve) => this._server!.close(() => resolve()));
    this._server = null;
  }

  async waitForCode(timeoutMs: number | undefined): Promise<string | null> {
    const start = Date.now();
    while (!this._code) {
      if (timeoutMs !== undefined && Date.now() - start >= timeoutMs) return null;
      await new Promise((r) => setTimeout(r, 100));
    }
    return this._code;
  }
}
