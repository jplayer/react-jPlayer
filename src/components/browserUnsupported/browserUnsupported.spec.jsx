import expect from 'expect';

import { classes } from '../../util/constants';
import BrowserUnsupported from './browserUnsupported';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const values = componentSetup(BrowserUnsupported, {
    ...props,
  });

  values.browserUnsupported = values.wrapper.dive();

  return values;
};
describe('BrowserUnsupported', () => {
  describe('when media is not supported', () => {
    const nonSupported = true;

    it('renders default children', () => {
      const { browserUnsupported } = setup({ nonSupported });

      expect(browserUnsupported.find('h4').exists()).toBeTruthy();
    });

    it('has browserUnsupported class', () => {
      const { browserUnsupported } = setup({ nonSupported });

      expect(browserUnsupported.hasClass(classes.NO_BROWSER_SUPPORT)).toBe(true);
    });

    it('custom children overwrite default if specified', () => {
      const children = 'test';
      const { browserUnsupported } = setup({ nonSupported, children });

      expect(browserUnsupported.prop('children')).toBe(children);
      expect(browserUnsupported.find('h4').exists()).toBeFalsy();
    });
  });

  it('renders nothing if media is supported', () => {
    const { browserUnsupported } = setup();

    expect(browserUnsupported.type()).toBe(null);
  });
});
