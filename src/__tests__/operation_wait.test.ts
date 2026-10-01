import { Metadata, status } from '@grpc/grpc-js';

import { Status, Code as StatusCode } from '../api/google/rpc/index.js';
import {
  DEFAULT_POLL_ERROR_BACKOFF_MAX_MS,
  GenericOperation,
  Operation,
  OperationService,
} from '../runtime/operation.js';
import { dayjs } from '../runtime/protos/core.js';
import { Request } from '../runtime/request.js';
import { Logger } from '../runtime/util/logging.js';

type TestRequest = Record<string, never>;

function operationProto(done = false): GenericOperation {
  return {
    $type: 'nebius.common.v1.Operation',
    id: 'operation-1',
    createdAt: dayjs(0),
    description: '',
    createdBy: '',
    requestHeaders: {},
    resourceId: '',
    status: done ? Status.create({ code: StatusCode.OK.code }) : undefined,
  };
}

function pollingError(code: number, message: string): Error & { code: number } {
  return Object.assign(new Error(message), { code });
}

function operationWithResults(results: Array<GenericOperation | Error>): {
  operation: Operation<TestRequest>;
  get: jest.Mock;
} {
  const logger = new Logger();
  const service = {} as OperationService<TestRequest>;
  const get = jest.fn(() => {
    const result = results.shift();
    if (!result) throw new Error('unexpected Get call');
    const promise =
      result instanceof Error
        ? Promise.reject(result)
        : Promise.resolve(new Operation(result, service, logger));
    return { result: promise } as Request<TestRequest, Operation<TestRequest>>;
  });
  service.get = get;
  return {
    operation: new Operation(operationProto(), service, logger),
    get,
  };
}

describe('Operation.wait poll error backoff', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('retries retriable polling errors', async () => {
    const { operation, get } = operationWithResults([
      pollingError(status.UNAVAILABLE, 'temporarily unavailable'),
      operationProto(true),
    ]);
    const attempts: number[] = [];

    const wait = operation.wait(0, new Metadata(), {
      pollErrorBackoff: (attempt) => {
        attempts.push(attempt);
        return 0;
      },
    });
    await jest.runAllTimersAsync();

    await expect(wait).resolves.toBeUndefined();
    expect(operation.successful()).toBe(true);
    expect(get).toHaveBeenCalledTimes(2);
    expect(attempts).toEqual([1]);
  });

  test('does not retry non-retriable polling errors', async () => {
    const error = pollingError(status.INVALID_ARGUMENT, 'invalid request');
    const { operation, get } = operationWithResults([error]);

    await expect(operation.wait(0)).rejects.toBe(error);
    expect(get).toHaveBeenCalledTimes(1);
  });

  test.each(['wait', 'update'] as const)(
    '%s preserves terminal state when an older pending response arrives later',
    async (method) => {
      const { operation, get } = operationWithResults([operationProto(true)]);
      let resolve!: (value: Operation<TestRequest>) => void;
      const pending = new Promise<Operation<TestRequest>>((done) => {
        resolve = done;
      });
      get.mockImplementationOnce(() => ({ result: pending }));
      const older = operation[method]();
      await operation.update();
      expect(operation.done()).toBe(true);
      resolve(new Operation(operationProto(), { get }, new Logger()));
      await expect(older).resolves.toBeUndefined();
      expect(operation.done()).toBe(true);
      expect(operation.successful()).toBe(true);
      await operation.update();
      expect(get).toHaveBeenCalledTimes(2);
    },
  );

  test('clamps negative polling backoff to an immediate retry', async () => {
    const { operation, get } = operationWithResults([
      pollingError(status.UNAVAILABLE, 'temporarily unavailable'),
      operationProto(true),
    ]);
    const wait = operation.wait(1, undefined, { pollErrorBackoff: () => -1 });
    await jest.runAllTimersAsync();
    await expect(wait).resolves.toBeUndefined();
    expect(get).toHaveBeenCalledTimes(2);
    expect(operation.successful()).toBe(true);
  });

  test('can disable poll error retries', async () => {
    const error = pollingError(status.UNAVAILABLE, 'temporarily unavailable');
    const { operation, get } = operationWithResults([error]);

    await expect(operation.wait(0, undefined, { pollErrorBackoff: null })).rejects.toBe(error);
    expect(get).toHaveBeenCalledTimes(1);
  });

  test('cancels an active poll when the overall wait timeout expires', async () => {
    const { operation, get } = operationWithResults([]);
    const cancel = jest.fn();
    get.mockImplementationOnce(() => ({ result: new Promise(() => {}), cancel }));
    const assertion = expect(operation.wait(1, undefined, { timeoutMs: 50 })).rejects.toMatchObject(
      {
        code: status.DEADLINE_EXCEEDED,
      },
    );
    await jest.advanceTimersByTimeAsync(50);
    await assertion;
    expect(cancel).toHaveBeenCalledTimes(1);
    expect(jest.getTimerCount()).toBe(0);
  });

  test('preserves a non-retriable poll error returned at the wait deadline', async () => {
    const error = pollingError(status.PERMISSION_DENIED, 'permission denied');
    const { operation, get } = operationWithResults([error]);
    get.mockImplementationOnce(() => {
      jest.setSystemTime(Date.now() + 50);
      return { result: Promise.reject(error) };
    });
    await expect(operation.wait(0, undefined, { timeoutMs: 50 })).rejects.toBe(error);
    expect(get).toHaveBeenCalledTimes(1);
  });

  test('resets the backoff attempt after a successful poll', async () => {
    const { operation } = operationWithResults([
      pollingError(status.RESOURCE_EXHAUSTED, 'first outage'),
      operationProto(),
      pollingError(status.DEADLINE_EXCEEDED, 'second outage'),
      operationProto(true),
    ]);
    const attempts: number[] = [];

    const wait = operation.wait(0, undefined, {
      pollErrorBackoff: (attempt) => {
        attempts.push(attempt);
        return 0;
      },
    });
    await jest.runAllTimersAsync();

    await expect(wait).resolves.toBeUndefined();
    expect(attempts).toEqual([1, 1]);
  });

  test('uses jittered exponential backoff capped at 30 seconds by default', async () => {
    jest.setSystemTime(0);
    jest.spyOn(Math, 'random').mockReturnValue(1);
    const { operation, get } = operationWithResults([
      pollingError(status.UNAVAILABLE, 'outage 1'),
      pollingError(status.UNAVAILABLE, 'outage 2'),
      pollingError(status.UNAVAILABLE, 'outage 3'),
      pollingError(status.UNAVAILABLE, 'outage 4'),
      pollingError(status.UNAVAILABLE, 'outage 5'),
      pollingError(status.UNAVAILABLE, 'outage 6'),
      operationProto(true),
    ]);

    const wait = operation.wait();
    await jest.runAllTimersAsync();

    await expect(wait).resolves.toBeUndefined();
    expect(get).toHaveBeenCalledTimes(7);
    expect(Date.now()).toBe(
      1_200 + 2_400 + 4_800 + 9_600 + 19_200 + DEFAULT_POLL_ERROR_BACKOFF_MAX_MS,
    );
  });
});
