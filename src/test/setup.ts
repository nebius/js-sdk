// Jest setup for gRPC tests
// Increase default test timeout for async server startup/shutdown
jest.setTimeout(20000);

// Ensure env vars modified in tests do not leak across tests
beforeEach(() => {
  delete process.env.NEBIUS_IAM_TOKEN;
});

afterEach(() => {
  delete process.env.NEBIUS_IAM_TOKEN;
});
