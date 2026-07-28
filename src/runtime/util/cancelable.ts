/**
 * Provides cancellation guards and timeouts for asynchronous SDK runtime work.
 *
 * Use {@link Cancelable} to cancel several registered operations together. Use
 * {@link withTimeout} when only a deadline is needed. These helpers reject
 * their returned promises, but they cannot stop arbitrary source promises.
 *
 * {@link CancelableSleep} and {@link sleep} are currently unusable on supported
 * Node.js runtimes because of a Promise-subclass compatibility problem. Do not
 * use them.
 *
 * @packageDocumentation
 */

/** Reports that a {@link Cancelable} operation was canceled. */
export class CancelError extends Error {
  /** Creates a new cancel error. */
  constructor() {
    super('canceled');
    this.name = 'CancelError';
  }
}

/** Reports that {@link withTimeout} reached its deadline. */
export class TimeoutError extends Error {
  /** Creates a new timeout error. */
  constructor() {
    super('Deadline exceeded');
    this.name = 'TimeoutError';
  }
}

/**
 * Coordinates cancellation for several waits and promises.
 *
 * One instance is a one-way lifecycle. After {@link cancel} runs,
 * {@link Cancelable.isCanceled} stays `true`; create a new instance for later
 * work. Cancellation rejects registered operations with {@link CancelError}.
 * It does not stop the underlying work of a promise passed to {@link guard}.
 *
 * @example
 * ```ts
 * import {
 *   Cancelable,
 *   CancelError,
 * } from '@nebius/js-sdk/runtime/util/cancelable';
 *
 * const cancellation = new Cancelable();
 * const work = cancellation.guard(new Promise<string>(() => {}));
 * cancellation.cancel();
 *
 * try {
 *   await work;
 * } catch (error) {
 *   if (error instanceof CancelError) {
 *     // The caller requested cancellation.
 *   }
 * }
 * ```
 */
export class Cancelable {
  private _isCanceled = false;
  private timers = new Set<NodeJS.Timeout>();
  private cancelWaiters = new Set<(reason?: CancelError) => void>();

  /**
   * Cancels registered operations and clears their delay timers.
   *
   * Calling this method more than once is safe.
   */
  cancel() {
    this._isCanceled = true;
    this.timers.forEach(clearTimeout);
    this.timers.clear();
    this.cancelWaiters.forEach((rej) => rej(new CancelError()));
    this.cancelWaiters.clear();
  }

  /** Returns whether {@link cancel} has been called. */
  get isCanceled() {
    return this._isCanceled;
  }

  /**
   * Waits for a duration or rejects with {@link CancelError} after cancellation.
   *
   * The timer does not keep a Node.js process alive.
   */
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

  /**
   * Rejects the returned promise when this instance is canceled.
   *
   * The source promise continues to run because JavaScript promises do not
   * have a general cancellation operation.
   */
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

  /**
   * Applies both this instance's cancellation and a timeout to a promise.
   *
   * Neither condition stops the source promise.
   */
  withTimeout<T>(promise: PromiseLike<T>, ms: number): Promise<T> {
    return withTimeout(this.guard(promise), ms);
  }
}

/**
 * Rejects with {@link TimeoutError} if a promise does not settle in time.
 *
 * The source promise continues to run after a timeout. Its later result is
 * ignored.
 *
 * @example
 * ```ts
 * import { withTimeout } from '@nebius/js-sdk/runtime/util/cancelable';
 *
 * const source = new Promise<string>((resolve) => {
 *   setTimeout(() => resolve('ready'), 10);
 * });
 * const result = await withTimeout(source, 5_000);
 * ```
 */
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

/**
 * Represents a delay that the caller can cancel.
 *
 * Awaiting a canceled delay rejects with {@link CancelError}. Canceling a delay
 * after it has completed has no effect.
 *
 * @remarks
 * Direct construction currently fails on supported Node.js runtimes because
 * this Promise subclass accesses instance state while the base Promise
 * constructor runs. Do not construct this class. Use a normal Promise timer
 * with {@link Cancelable.guard} until the implementation is corrected.
 */
export class CancelableSleep extends Promise<void> {
  private handle: NodeJS.Timeout | null = null;
  private rejector: (reason?: CancelError) => void = () => {};
  /** Creates a delay in milliseconds. Its timer does not keep Node.js alive. */
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
  /** Cancels a pending delay. */
  cancel() {
    if (this.handle) {
      clearTimeout(this.handle);
      this.handle = null;
      this.rejector(new CancelError());
    }
  }
}

/**
 * Returns a cancellable delay.
 *
 * `setCancel` receives the cancellation function immediately. This is useful
 * when an API must expose cancellation separately from its returned promise.
 *
 * @remarks
 * This function constructs {@link CancelableSleep} and therefore fails on
 * supported Node.js runtimes. Do not call it until the Promise-subclass
 * implementation is corrected.
 */
export function sleep(ms: number, setCancel?: (cancel: () => void) => void): CancelableSleep {
  const sleeper = new CancelableSleep(ms);
  setCancel?.(() => sleeper.cancel());
  return sleeper;
}
