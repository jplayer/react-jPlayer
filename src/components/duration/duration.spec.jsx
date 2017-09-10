import expect from 'expect';

import Duration from './duration';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = (props) => {
  const values = componentSetup(Duration, {
    ...props,
  });

  values.duration = values.wrapper.dive();

  return values;
};

describe('Duration', () => {
  describe('when durationText is supplied', () => {
    const durationText = '2:20';

    it('has duration class', () => {
      const { duration } = setup({ durationText });

      expect(duration.hasClass(classes.DURATION)).toBe(true);
    });

    it('durationText is rendered as a child', () => {
      const { duration, props } = setup({ durationText });

      expect(duration.prop('children')).toBe(props.durationText);
    });
  });

  it('renders nothing if durationText is not supplied', () => {
    const { duration } = setup();

    expect(duration.type()).toBe(null);
  });
});
