import expect from 'expect';

import Download from './download';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const values = componentSetup(Download, {
    children: 'download',
    ...props,
  });

  values.download = values.wrapper.dive();

  return values;
};

describe('Download', () => {
  describe('when media is free', () => {
    const free = true;

    it('has download class', () => {
      const { download } = setup({ free });

      expect(download.hasClass(classes.DOWNLOAD)).toBe(true);
    });

    it('has download attribute', () => {
      const { download } = setup({ free });

      expect(download.prop('download')).toBe(true);
    });

    it('href is set to url', () => {
      const url = 'www.test.com';
      const { download } = setup({ url, free });

      expect(download.prop('href')).toBe(url);
    });

    it('children are rendered', () => {
      const { download, props } = setup({ free });

      expect(download.prop('children')).toBe(props.children);
    });
  });

  it('renders nothing if media is not free', () => {
    const { download } = setup();

    expect(download.type()).toBe(null);
  });
});
