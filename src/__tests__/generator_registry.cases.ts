import fs from 'fs';
import path from 'path';

import { MessageClassInterface } from '../runtime/protos/registry';

import { GENERATED_NB, ROOT } from './generator_shared.helpers';

/**
 * Registers tests validating that the local message type registry file is generated
 * (registryFile=someotherfolder/protoregistry.ts in buf.gen.test.yaml) and that it is populated
 * with the common v1 Operation message after the corresponding index module is loaded.
 */
export function registerRegistryTests(): void {
  describe('Local registry generation', () => {
    test('registry file exists', () => {
      const registryPath = path.join(ROOT, GENERATED_NB, 'someotherfolder/protoregistry.ts');
      expect(fs.existsSync(registryPath)).toBe(true);
    });

    test('registry contains nebius.common.v1.Operation after loading common v1 index', () => {
      // protoRegistry is a custom Registry instance (Map-like) – keep loose typing
      const registryMod = require(
        path.join(ROOT, GENERATED_NB, 'someotherfolder/protoregistry'),
      ) as {
        protoRegistry: {
          getMessage(type: string): MessageClassInterface | undefined;
        };
      };
      const { protoRegistry } = registryMod;
      expect(protoRegistry).toBeDefined();
      // Ensure not yet populated before loading (defensive – won't fail if already loaded elsewhere)
      // Load index which registers messages
      require(path.join(ROOT, GENERATED_NB, 'nebius/common/v1/index'));
      const op = protoRegistry.getMessage('nebius.common.v1.Operation');
      expect(op).toBeDefined();
      expect(op?.$type).toBe('nebius.common.v1.Operation');
    });
  });
}
