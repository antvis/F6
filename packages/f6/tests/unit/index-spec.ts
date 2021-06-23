import { version } from '../../package.json';
import Global from '../../src/global';

describe('F6 version', () => {
  it('export', () => {
    expect(Global.version).toBe(version);
  });
});
