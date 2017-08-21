import expect from 'expect';

import BufferBar from './bufferBar';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(BufferBar, {
  setCanvas: Function.prototype,
  ...props,
});

describe('Audio', () => {
  it('renders bufferBar class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBe(true);
  });

  it('renders canvas', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('canvas');
  });
});
