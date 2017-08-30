import expect from 'expect';

import PlayBar from './poster';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(PlayBar, props);

describe('Poster', () => {
  it('has poster class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.POSTER)).toBe(true);
  });

  it('has src', () => {
    const src = 'test.jpg';
    const { wrapper } = setup({ src });

    expect(wrapper.prop('src')).toBe(src);
  });
});
