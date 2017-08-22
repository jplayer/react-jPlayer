import expect from 'expect';

import { classes } from '../../util/constants';
import BrowserUnsupported from './browserUnsupported';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(BrowserUnsupported, props);

describe('BrowserUnsupported', () => {
  it('renders default children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('h4').exists()).toBeTruthy();
  });

  it('has browserUnsupported class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBe(true);
  });

  it('custom children overwrite default if specified', () => {
    const children = 'test';
    const { wrapper } = setup({ children });

    expect(wrapper.prop('children')).toBe(children);
    expect(wrapper.find('h4').exists()).toBeFalsy();
  });
});
