import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import CurrentTimeContainer from './currentTime.container';
import CurrentTime from './currentTime';

const setup = () => shallowSetup(CurrentTimeContainer);

describe('CurrentTimeContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(CurrentTime);
    expect(wrapper.prop('children')).toBe(jPlayer.currentTimeText);
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
