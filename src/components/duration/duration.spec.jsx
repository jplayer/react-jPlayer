import expect from 'expect';

import Duration from './duration';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(Duration, {
  durationText: '2:20',
  ...props,
});

describe('Duration', () => {
  it('has duration class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.DURATION)).toBe(true);
  });

  it('durationText is rendered as a child', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.durationText);
  });
});
