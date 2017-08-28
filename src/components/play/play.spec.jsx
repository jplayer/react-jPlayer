import expect from 'expect';

import Play from './play';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const id = 'TestPlayer';
const setup = props => componentSetup(Play, {
  children: 'play',
  play: expect.createSpy(),
  paused: false,
  id,
  ...props,
});

describe('Play', () => {
  it('has play class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.PLAY)).toBe(true);
  });

  it('plays media on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.play).toHaveBeenCalledWith(id, props.paused);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
