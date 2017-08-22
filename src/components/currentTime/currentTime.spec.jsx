import expect from 'expect';

import CurrentTime from './currentTime';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(CurrentTime, {
  currentTimeText: '00:20',
  ...props,
});

describe('Audio', () => {
  it('has currentTime class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.CURRENT_TIME)).toBe(true);
  });

  it('currentTimeText is rendered as a child', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.currentTimeText);
  });
});
