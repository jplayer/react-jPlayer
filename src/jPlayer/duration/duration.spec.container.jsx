import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import DurationContainer from './duration.container';
import Duration from './duration';

const setup = () => shallowSetup(DurationContainer);

describe('DurationContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Duration);
    expect(wrapper.prop('children')).toBe(jPlayer.durationText);
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
