import expect from 'expect';

import Poster from './poster';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = (props) => {
  const values = componentSetup(Poster, {
    ...props,
  });

  values.poster = values.wrapper.dive();

  return values;
};
describe('Poster', () => {
  describe('when src is supplied', () => {
    const src = 'test.mp3';

    it('has poster class', () => {
      const { poster } = setup({ src });

      expect(poster.hasClass(classes.POSTER)).toBe(true);
    });

    it('has src', () => {
      const { poster } = setup({ src });

      expect(poster.prop('src')).toBe(src);
    });
  });

  it('renders nothing if no src is supplied', () => {
    const { poster } = setup();

    expect(poster.type()).toBe(null);
  });
});
