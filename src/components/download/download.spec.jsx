import expect from 'expect';

import Download from './download';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Download, {
  children: 'download',
  ...props,
});

describe('Download', () => {
  it('has download class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.DOWNLOAD)).toBe(true);
  });

  it('has download attribute', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('download')).toBe(true);
  });

  it('href is set to url', () => {
    const url = 'www.test.com';
    const { wrapper } = setup({ url });

    expect(wrapper.prop('href')).toBe(url);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
