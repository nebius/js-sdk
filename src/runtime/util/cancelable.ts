export class CancelError extends Error {
  constructor() {
    super('canceled');
    this.name = 'CancelError';
  }
}

export class TimeoutError extends Error {
  constructor() {
    super('Deadline exceeded');
    this.name = 'TimeoutError';
  }
}

export class Cancelable {
  private _isCanceled = false;
  private timers = new Set<NodeJS.Timeout>();
  private timerPromiseRejectors = new Set<(reason?: CancelError) => void>();

  cancel() {
    this._isCanceled = true;
    this.timers.forEach(clearTimeout);
    this.timers.clear();
    this.timerPromiseRejectors.forEach((rej) => rej(new CancelError()));
    this.timerPromiseRejectors.clear();
  }

  get isCanceled() {
    return this._isCanceled;
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const handle = setTimeout(() => {
        if (this._isCanceled) {
          reject(new CancelError());
        } else {
          this.timers.delete(handle);
          this.timerPromiseRejectors.delete(reject);
          resolve();
        }
      }, ms);
      this.timers.add(handle);
      this.timerPromiseRejectors.add(reject);
    });
  }

  guard<T>(promise: PromiseLike<T>): Promise<T> {
    let resolver: (value: void | PromiseLike<void>) => void;
    let rejector: (reason?: unknown) => void;
    const guarder = new Promise<void>((resolve, reject) => {
      resolver = resolve;
      rejector = reject;
    });
    this.timerPromiseRejectors.add(rejector!);
    return new Promise<T>((resolveMain, rejectMain) =>
      Promise.race([promise, guarder]).then(
        (v) => {
          this.timerPromiseRejectors.delete(rejector!);
          if (this._isCanceled) {
            rejectMain(new CancelError());
          } else {
            resolveMain(v as T);
            try {
              resolver!();
            } catch {} // mute in case already resolved/rejected
          }
        },
        (reason) => {
          this.timerPromiseRejectors.delete(rejector!);
          rejectMain(reason);
          try {
            rejector!(reason);
          } catch {} // mute in case already resolved/rejected
        },
      ),
    );
  }

  withTimeout<T>(promise: PromiseLike<T>, ms: number): Promise<T> {
    return withTimeout(this.guard(promise), ms);
  }
}

export function withTimeout<T>(promise: PromiseLike<T>, ms: number): Promise<T> {
  let handle: NodeJS.Timeout;
  return new Promise<T>((resolve, reject) => {
    handle = setTimeout(() => {
      reject(new TimeoutError());
    }, ms);
    return Promise.resolve(promise).then(
      (v) => {
        clearTimeout(handle);
        resolve(v);
      },
      (err) => {
        clearTimeout(handle);
        reject(err);
      },
    );
  });
}
