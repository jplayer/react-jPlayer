import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import PlaybackRateBarValueContainer from './playbackRateBarValue.container';
import PlaybackRateBarValue from './playbackRateBarValue';

const setup = state => shallowSetup(PlaybackRateBarValueContainer, null, state);

describe('PlaybackRateBarValueContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(PlaybackRateBarValue);
    expect(wrapper.prop('verticalPlaybackRate')).toEqual(jPlayer.verticalPlaybackRate);
    expect(wrapper.prop('minPlaybackRate')).toEqual(jPlayer.minPlaybackRate);
    expect(wrapper.prop('maxPlaybackRate')).toEqual(jPlayer.maxPlaybackRate);
    expect(wrapper.prop('playbackRate')).toEqual(jPlayer.playbackRate);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
