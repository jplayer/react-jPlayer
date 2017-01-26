import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { mockStore } from '../../util/common.spec';
import AudioContainer from './audio.container';
import Audio from './audio';

describe('Audio Container', () => {
  const uid = 'player-1';
  let wrapper;
  let store;

  const renderWrapper = (state = { mediaSettings: {} }) => {
    store = mockStore(state);
    expect.spyOn(store, 'dispatch');
    wrapper = shallow(
      <AudioContainer className="test">
        <Audio />
      </AudioContainer>,
      { context: { uid } },
    ).dive({ context: { store } });
  };

  beforeEach(() => {
    renderWrapper();
  });

  it('doesn\'t requires opposite of video', () => {
    renderWrapper({ mediaSettings: { video: true } });
    const video = store.getState().jPlayers[uid].mediaSettings.video;
    expect(wrapper.prop('require')).toBe(!video);
  });

  it('requires audio if no video', () => {
    const video = store.getState().jPlayers[uid].mediaSettings.video;
    expect(wrapper.prop('require')).toBe(!video);
  });

  it('renders component', () => {
    expect(wrapper.type()).toBe(Audio);
  });

  it('maps children', () => {
    expect(wrapper.prop('children').type).toBe(Audio);
  });

  it('maps attributes', () => {
    expect(wrapper.prop('className')).toEqual('test');
  });
});
