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
  private cancelWaiters = new Set<(reason?: CancelError) => void>();

  cancel() {
    this._isCanceled = true;
    this.timers.forEach(clearTimeout);
    this.timers.clear();
    this.cancelWaiters.forEach((rej) => rej(new CancelError()));
    this.cancelWaiters.clear();
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
          this.cancelWaiters.delete(reject);
          resolve();
        }
      }, ms);
      handle.unref?.();
      this.timers.add(handle);
      this.cancelWaiters.add(reject);
    });
  }

  guard<T>(promise: PromiseLike<T>): Promise<T> {
    let resolver: (value: void | PromiseLike<void>) => void;
    let rejector: (reason?: unknown) => void;
    const guarder = new Promise<void>((resolve, reject) => {
      resolver = resolve;
      rejector = reject;
    });
    this.cancelWaiters.add(rejector!);
    return new Promise<T>((resolveMain, rejectMain) =>
      Promise.race([promise, guarder]).then(
        (v) => {
          this.cancelWaiters.delete(rejector!);
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
          this.cancelWaiters.delete(rejector!);
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
    handle.unref?.();
    return Promise.resolve(promise).then(
      (result) => {
        clearTimeout(handle);
        resolve(result);
      },
      (err) => {
        clearTimeout(handle);
        reject(err);
      },
    );
  });
}

export class CancelableSleep extends Promise<void> {
  private handle: NodeJS.Timeout | null = null;
  private rejector: (reason?: CancelError) => void = () => {};
  constructor(ms: number) {
    let resolver: (value: void | PromiseLike<void>) => void;
    super((resolve, reject) => {
      resolver = resolve;
      this.rejector = reject;
    });
    this.handle = setTimeout(() => {
      this.handle = null;
      resolver();
    }, ms);
    this.handle.unref?.();
  }
  cancel() {
    if (this.handle) {
      clearTimeout(this.handle);
      this.handle = null;
      this.rejector(new CancelError());
    }
  }
}

export function sleep(ms: number, setCancel?: (cancel: () => void) => void): CancelableSleep {
  const sleeper = new CancelableSleep(ms);
  setCancel?.(() => sleeper.cancel());
  return sleeper;
}
