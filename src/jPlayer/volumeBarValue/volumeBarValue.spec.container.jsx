import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import VolumeBarValueContainer from './volumeBarValue.container';
import VolumeBarValue from './volumeBarValue';

const setup = state => shallowSetup(VolumeBarValueContainer, null, state);

describe('TitleContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(VolumeBarValue);
    expect(wrapper.prop('verticalVolume')).toBe(jPlayer.verticalVolume);
    expect(wrapper.prop('muted')).toBe(jPlayer.muted);
    expect(wrapper.prop('volume')).toBe(jPlayer.volume);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
