import { registerSelfCompatTests } from './generator_basic.cases';
import { registerCrossCompatTests } from './generator_cross.cases';
import { registerExtensionTests } from './generator_extensions.cases';
import { registerRegistryTests } from './generator_registry.cases';
import { cleanupGenerated, ensureProto, runBufGenerateOnce } from './generator_shared.helpers';

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
});
