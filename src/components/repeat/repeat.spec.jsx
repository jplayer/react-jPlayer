import expect from 'expect';

import Repeat from './repeat';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const id = 'TestPlayer';
const setup = props => componentSetup(Repeat, {
  loop: false,
  children: 'loop',
  setLoop: expect.createSpy(),
  id,
  ...props,
});

describe('Loop', () => {
  it('has repeat class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.REPEAT)).toBe(true);
  });

  it('toggles loop on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.setLoop).toHaveBeenCalledWith(id, !props.loop);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
