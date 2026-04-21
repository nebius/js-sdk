import { registerSelfCompatTests } from './generator_basic.cases.js';
import { registerCrossCompatTests } from './generator_cross.cases.js';
import { registerExtensionTests } from './generator_extensions.cases.js';
import { registerRegistryTests } from './generator_registry.cases.js';
import { registerSanitizationTests } from './generator_sanitization.cases.js';
import { cleanupGenerated, ensureProto, runBufGenerateOnce } from './generator_shared.helpers.js';

beforeAll(() => {
  // these functions are strictly synchronous
  // you must not add other test suits using these functions, add any tests
  // to this suite
  ensureProto();
  runBufGenerateOnce();
}, 120000);

afterAll(() => {
  cleanupGenerated();
});

describe('WKT compatibility (self + cross, single generation)', () => {
  registerSelfCompatTests();
  registerCrossCompatTests();
  registerRegistryTests();
  registerExtensionTests();
  registerSanitizationTests();
});
