// Jest setup for gRPC tests
// Increase default test timeout for async server startup/shutdown
jest.setTimeout(20000);

beforeAll(() => {
  process.env.NEBIUS_LOG = process.env.NEBIUS_LOG || 'none';
  if (process.env.NEBIUS_LOG_OUTPUT === 'stderr') {
    console.error = (msg, ...args) => {
      // Avoid logging empty messages
      if (msg === undefined || msg === null || (typeof msg === 'string' && msg.trim() === '')) {
        return;
      }

      process.stderr.write(require('util').format(msg, ...args) + '\n');
    };
  }
});
// Ensure env vars modified in tests do not leak across tests
beforeEach(() => {
  delete process.env.NEBIUS_IAM_TOKEN;
});

afterEach(() => {
  delete process.env.NEBIUS_IAM_TOKEN;
});
