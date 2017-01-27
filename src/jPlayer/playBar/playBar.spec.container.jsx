import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import PlayBarContainer from './playBar.container';
import PlayBar from './playBar';

const setup = state => shallowSetup(PlayBarContainer, null, state);

describe('MuteContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(PlayBar);
    expect(wrapper.prop('smoothPlayBar')).toEqual(jPlayer.smoothPlayBar);
    expect(wrapper.prop('currentPercentAbsolute')).toEqual(jPlayer.currentPercentAbsolute);
    expect(wrapper.prop('currentPercentRelative')).toEqual(jPlayer.currentPercentRelative);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
