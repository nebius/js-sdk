import { Server, ServerCredentials } from '@grpc/grpc-js';
import Long from 'long';

import { Status } from '../api/google/rpc/index';
import {
  GetOperationRequest,
  Operation as OperationPb,
  OperationService as OperationServiceClient,
  OperationServiceServiceDescription as OperationServiceService,
  ProgressTracker,
  ProgressTracker_Step,
  ProgressTracker_WorkDone,
  type OperationServiceServer,
} from '../api/nebius/common/v1/index';
import { Operation as OperationAlpha } from '../api/nebius/common/v1alpha1/index';
import {
  ClusterService as MlflowClusterServiceClient,
  ClusterServiceServiceDescription as MlflowClusterServiceService,
  CreateClusterRequest,
  type ClusterServiceServer as MlflowClusterServiceServer,
} from '../api/nebius/msp/mlflow/v1alpha1/index';
import { Operation as OperationWrapper } from '../runtime/operation';
import { dayjs } from '../runtime/protos/core';
import { Basic } from '../runtime/resolver';
import { SDK } from '../sdk';

function startServerWithPort(
  addImpl: (server: Server) => void,
): Promise<{ server: Server; address: string; port: number }> {
  return new Promise((resolve, reject) => {
    const server = new Server();
    addImpl(server);
    server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (err, port) => {
      if (err) return reject(err);
      resolve({ server, address: `127.0.0.1:${port}`, port });
    });
  });
}

function workDone(total: number, done: number): ProgressTracker_WorkDone {
  return ProgressTracker_WorkDone.create({
    totalTickCount: Long.fromNumber(total),
    doneTickCount: Long.fromNumber(done),
  });
}

function opWithTracker(
  tracker?: ProgressTracker,
  options?: { status?: Status; finishedAt?: ReturnType<typeof dayjs> },
): OperationPb {
  return OperationPb.create({
    id: 'op-1',
    progressTracker: tracker,
    status: options?.status,
    finishedAt: options?.finishedAt,
  });
}

describe('Operation progress tracker', () => {
  test('updates and fractions', async () => {
    const baseNow = Date.now();
    const startedPast = dayjs(baseNow - 120_000);
    const startedNow = dayjs(baseNow - 5_000);
    const startedFuture = dayjs(baseNow + 60_000);
    const estimateFuture = dayjs(baseNow + 120_000);
    const estimatePast = dayjs(baseNow - 10_000);
    const estimateUpdated = dayjs(baseNow + 30_000);
    const finishedTime = dayjs(baseNow + 1_000);

    const op0 = OperationPb.create({ id: 'op-1' });

    const op1 = opWithTracker(ProgressTracker.create({}));

    const op2 = opWithTracker(
      ProgressTracker.create({
        description: 'phase-1',
        startedAt: startedNow,
        workDone: workDone(10, 2),
      }),
    );

    const op3 = opWithTracker(
      ProgressTracker.create({
        description: 'phase-1-est',
        startedAt: startedFuture,
        estimatedFinishedAt: estimateFuture,
      }),
    );

    const stepA = ProgressTracker_Step.create({
      description: 'step-a',
      startedAt: startedPast,
      workDone: workDone(4, 1),
    });
    const stepB = ProgressTracker_Step.create({
      description: 'step-b',
      startedAt: startedPast,
    });
    const op4 = opWithTracker(
      ProgressTracker.create({
        description: 'phase-2',
        startedAt: startedPast,
        estimatedFinishedAt: estimatePast,
        steps: [stepA, stepB],
      }),
    );

    const stepAUpdated = ProgressTracker_Step.create({
      description: 'step-a',
      startedAt: startedPast,
      finishedAt: dayjs(baseNow - 5_000),
      workDone: workDone(4, 4),
    });
    const stepBUpdated = ProgressTracker_Step.create({
      description: 'step-b updated',
      startedAt: startedPast,
      workDone: workDone(2, 1),
    });
    const op5 = opWithTracker(
      ProgressTracker.create({
        description: 'phase-2 updated',
        startedAt: startedPast,
        estimatedFinishedAt: estimateUpdated,
        workDone: workDone(10, 7),
        steps: [stepAUpdated, stepBUpdated],
      }),
    );

    const stepADone = ProgressTracker_Step.create({
      description: 'step-a',
      startedAt: startedPast,
      finishedAt: finishedTime,
      workDone: workDone(4, 4),
    });
    const stepBDone = ProgressTracker_Step.create({
      description: 'step-b updated',
      startedAt: startedPast,
      finishedAt: finishedTime,
      workDone: workDone(2, 2),
    });
    const op6 = opWithTracker(
      ProgressTracker.create({
        description: 'done',
        startedAt: startedPast,
        finishedAt: finishedTime,
        workDone: workDone(10, 10),
        steps: [stepADone, stepBDone],
      }),
      { status: Status.create({ code: 0, message: '', details: [] }), finishedAt: finishedTime },
    );

    const responses = [op1, op2, op3, op4, op5, op6];
    let index = 0;

    const { server, address } = await startServerWithPort((server) => {
      const impl: OperationServiceServer = {
        get: (call, callback) => {
          const req = call.request as GetOperationRequest;
          expect(req.id).toBe('op-1');
          const response =
            index < responses.length ? responses[index] : responses[responses.length - 1];
          index += 1;
          callback(null, response);
        },
        list: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(OperationServiceService, impl);
    });

    const sdk = new SDK({ insecure: true });
    const service = new OperationServiceClient(sdk, address);
    const operation = new OperationWrapper(op0, service, sdk.logger.child('operation'));

    try {
      expect(operation.progressTracker()).toBeUndefined();

      await operation.update();
      let tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(tracker.description()).toBe('');
      expect(tracker.startedAt()).toBeUndefined();
      expect(tracker.estimatedFinishedAt()).toBeUndefined();
      expect(tracker.workFraction()).toBeUndefined();
      expect(tracker.timeFraction()).toBeUndefined();
      expect(tracker.steps()).toEqual([]);

      await operation.update();
      tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(tracker.description()).toBe('phase-1');
      expect(tracker.startedAt()?.valueOf()).toBe(startedNow.valueOf());
      expect(tracker.estimatedFinishedAt()).toBeUndefined();
      expect(tracker.workFraction()).toBeCloseTo(0.2, 6);
      expect(tracker.timeFraction()).toBeUndefined();
      expect(tracker.steps()).toEqual([]);

      await operation.update();
      tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(tracker.description()).toBe('phase-1-est');
      expect(tracker.startedAt()?.valueOf()).toBe(startedFuture.valueOf());
      expect(tracker.estimatedFinishedAt()?.valueOf()).toBe(estimateFuture.valueOf());
      expect(tracker.workFraction()).toBeUndefined();
      expect(tracker.timeFraction()).toBe(0.0);

      await operation.update();
      tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(tracker.description()).toBe('phase-2');
      expect(tracker.estimatedFinishedAt()?.valueOf()).toBe(estimatePast.valueOf());
      expect(tracker.timeFraction()).toBe(1.0);
      expect(tracker.workFraction()).toBeUndefined();
      let steps = tracker.steps();
      expect(steps.length).toBe(2);
      expect(steps[0].description()).toBe('step-a');
      expect(steps[0].workFraction()).toBeCloseTo(0.25, 6);
      expect(steps[1].description()).toBe('step-b');
      expect(steps[1].workFraction()).toBeUndefined();

      await operation.update();
      tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(tracker.description()).toBe('phase-2 updated');
      expect(tracker.estimatedFinishedAt()?.valueOf()).toBe(estimateUpdated.valueOf());
      expect(tracker.workFraction()).toBeCloseTo(0.7, 6);
      const timeFraction = tracker.timeFraction();
      expect(timeFraction).not.toBeUndefined();
      expect(timeFraction as number).toBeGreaterThanOrEqual(0.0);
      expect(timeFraction as number).toBeLessThanOrEqual(1.0);
      steps = tracker.steps();
      expect(steps.length).toBe(2);
      expect(steps[0].workFraction()).toBeCloseTo(1.0, 6);
      expect(steps[0].finishedAt()).toBeDefined();
      expect(steps[1].description()).toBe('step-b updated');
      expect(steps[1].workFraction()).toBeCloseTo(0.5, 6);

      await operation.update();
      tracker = operation.progressTracker();
      expect(tracker).toBeDefined();
      if (!tracker) throw new Error('progress tracker missing');
      expect(operation.done()).toBe(true);
      expect(tracker.description()).toBe('done');
      expect(tracker.workFraction()).toBe(1.0);
      expect(tracker.timeFraction()).toBe(1.0);
      expect(tracker.estimatedFinishedAt()?.valueOf()).toBe(finishedTime.valueOf());
      expect(operation.finishedAt()?.valueOf()).toBe(finishedTime.valueOf());
      steps = tracker.steps();
      expect(steps.length).toBe(2);
      expect(steps[0].workFraction()).toBeCloseTo(1.0, 6);
      expect(steps[1].workFraction()).toBeCloseTo(1.0, 6);
    } finally {
      await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
    }
  });
});

describe('mlflow v1alpha1 operations', () => {
  test('cluster create returns operation without tracker', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: MlflowClusterServiceServer = {
        get: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        list: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c, cb) => {
          cb(null, OperationAlpha.create({ id: 'mlflow-op-1' }));
        },
        delete: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(MlflowClusterServiceService, impl);
    });

    const sdk = new SDK({
      insecure: true,
      resolver: new Basic('nebius.msp.mlflow.v1alpha1.*', address),
    });
    const client = new MlflowClusterServiceClient(sdk);

    try {
      const req = CreateClusterRequest.create({});
      const op = await client.create(req).result;
      expect(op.progressTracker()).toBeUndefined();
    } finally {
      await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
    }
  });
});
