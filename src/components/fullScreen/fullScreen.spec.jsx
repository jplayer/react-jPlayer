import expect from 'expect';

import FullScreen from './fullScreen';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const id = 'TestPlayer';
const setup = props => componentSetup(FullScreen, {
  children: 'fullScreen',
  fullScreen: false,
  setFullScreen: expect.createSpy(),
  id,
  ...props,
});

describe('FullScreen', () => {
  it('has fullScreen class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.FULL_SCREEN)).toBe(true);
  });

  it('toggles fullScreen on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.setFullScreen).toHaveBeenCalledWith(id, !props.fullScreen);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
