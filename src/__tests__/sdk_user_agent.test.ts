import { Level } from '../runtime/util/logging.js';
import { SDK } from '../sdk.js';

const warning = 'SDKOptions.userAgentPrefix will become mandatory in a future release';

describe('SDK user-agent prefix', () => {
  test('warns when the prefix is not set', () => {
    const log = jest.fn();

    new SDK({ insecure: true, logger: { log } });

    expect(log).toHaveBeenCalledWith(Level.WARN, warning, {}, 'nebius.sdk', -1);
  });

  test('does not warn when the prefix is set', () => {
    const log = jest.fn();

    new SDK({ insecure: true, logger: { log }, userAgentPrefix: 'example-application/1.0' });

    expect(log).not.toHaveBeenCalledWith(Level.WARN, warning, {}, 'nebius.sdk', -1);
  });
});
