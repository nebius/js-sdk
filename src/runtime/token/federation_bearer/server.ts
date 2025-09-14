import { createServer, Server } from 'http';
import { AddressInfo } from 'net';
import { URL } from 'url';

import { withTimeout } from '../../util/cancelable';
import { Logger } from '../../util/logging';

import { PKCE } from './pkce';

export class CallbackHandler {
  private _code: string | null = null;
  private _state: string = new PKCE().verifier;
  private _server: Server | null = null;
  private _addr: string | null = null;
  private _codePromise: Promise<string | null> | null = null;
  private _codePromiseResolve: ((code: string | null) => void) | null = null;
  private _codePromiseReject: ((err: Error) => void) | null = null;
  private readonly logger?: Logger;
  constructor(logger?: Logger) {
    this.logger = logger?.withFields({ state: this._state }) ?? undefined;
    this._codePromise = new Promise<string | null>((resolve, reject) => {
      this._codePromiseResolve = resolve;
      this._codePromiseReject = reject;
    });
  }

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
    if (this._server) {
      this.logger?.debug('listenAndServe: already started');
      return;
    }
    this.logger?.trace('listenAndServe: starting');
    this._server = createServer((req, res) => {
      try {
        const u = new URL(req.url || '/', `http://${req.headers.host}`);
        const uSanitized = new URL(u.toString());
        if (u.searchParams.get('code')) {
          uSanitized.searchParams.set('code', u.searchParams.get('code')?.slice(0, 3) + '...');
        }
        this.logger?.trace('server_callback: request received', {
          method: req.method,
          url: uSanitized.toString(),
          headers: req.headers,
        });
        if (u.pathname === '/') {
          const code = u.searchParams.get('code');
          const receivedState = u.searchParams.get('state');
          this._setCode(code, receivedState);
          if (this._code && receivedState === this._state) {
            this.logger?.trace('server_callback: login successful', {
              code: code ? code.slice(0, 3) + '...' : null,
              receivedState,
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Login successful. You may close this tab.');
            return;
          }
          this.logger?.trace('server_callback: login failed', {
            code: code ? code.slice(0, 3) + '...' : null,
            receivedState,
          });
          res.statusCode = 400;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Login is not successful, please try again.');
          return;
        }
        this.logger?.trace('server_callback: request not handled', {
          method: req.method,
          url: uSanitized.toString(),
        });
        res.statusCode = 404;
        res.end('Not found');
      } catch (err) {
        this.logger?.error('server_callback: internal error', { err });
        res.statusCode = 500;
        res.end('Internal error');
      }
    });
    this.logger?.trace('listenAndServe: starting server');
    await new Promise<void>((resolve) => this._server!.listen(0, '127.0.0.1', () => resolve()));
    const addr = this._server.address() as AddressInfo;
    this._addr = `http://127.0.0.1:${addr.port}`;
    this.logger?.trace('listenAndServe: server started', { addr });
  }

  private _setCode(code: string | null, receivedState: string | null) {
    if (code && receivedState === this._state) {
      this.logger?.trace('_setCode: code set', { code: code.slice(0, 3) + '...' });
      this._code = code;
      if (this._codePromiseResolve) this._codePromiseResolve(this._code);
    } else {
      this.logger?.trace('_setCode: code not set, state mismatch or missing code', {
        code: code ? code.slice(0, 3) + '...' : null,
        receivedState,
      });
    }
  }

  async shutdown(): Promise<void> {
    if (!this._server) return;
    this.logger?.trace('shutdown: shutting down server');
    await new Promise<void>((resolve) => this._server!.close(() => resolve()));
    this.logger?.trace('shutdown: server shut down');
    if (this._codePromiseReject) this._codePromiseReject(new Error('server shutdown'));
    this._server = null;
  }

  async waitForCode(timeoutMs: number | undefined): Promise<string | null> {
    if (this._code) return this._code;
    if (!this._codePromise) return null;
    this.logger?.trace('waitForCode: waiting for code', { timeoutMs });
    if (timeoutMs === undefined) {
      return await this._codePromise;
    }
    return withTimeout(this._codePromise, timeoutMs);
  }
}
