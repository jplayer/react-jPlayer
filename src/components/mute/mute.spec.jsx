import expect from 'expect';

import Mute from './mute';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const id = 'TestPlayer';
const setup = props => componentSetup(Mute, {
  children: 'mute',
  setMute: expect.createSpy(),
  muted: false,
  id,
  ...props,
});

describe('Mute', () => {
  it('has mute class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.MUTE)).toBe(true);
  });

  it('toggles mute on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.setMute).toHaveBeenCalledWith(id, !props.muted);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
