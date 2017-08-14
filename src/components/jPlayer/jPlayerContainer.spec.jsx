import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import proxyquire from 'proxyquire';

import jPlayers from '../../reducer/reducer';
import { defaultOptions } from '../../util/constants';

const id = 'TestPlayer';
const mockJPlayer = ({ onMouseMoveCapture }) => (
  <div onMouseMoveCapture={onMouseMoveCapture} />
);
const JPlayerContainer = proxyquire('./jPlayerContainer', {
  './jPlayer': mockJPlayer,
}).default;
const setup = (stateProperties, newProps) => {
  const props = {
    id,
    ...newProps,
  };

  const state = {
    jPlayers: {
      [id]: {
        media: defaultOptions.media,
        startGuiFadeOut: false,
        mediaSettings: {},
        fullScreen: false,
        paused: true,
        ...stateProperties,
      },
    },
  };

  const store = createStore(combineReducers({ jPlayers }), state);

  const wrapper = mount(
    <Provider store={store}>
      <JPlayerContainer {...props} />
    </Provider>, {
      context: {
        id,
      },
      childContextTypes: {
        id: PropTypes.string,
      },
    },
  );

  return {
    wrapper,
    props,
    store,
  };
};

describe('JPlayerContainer', () => {
  let store;
  let wrapper;

  it('sets media on load', () => {
    const media = {
      title: 'testTitle',
      sources: [{ mp3: 'www.test.com' }],
    };

    ({ store } = setup({ media }));

    const testPlayer = store.getState().jPlayers.TestPlayer;

    expect(testPlayer.media).toBe(media);
  });

  describe('onMouseMoveCapture', () => {
    it('dispatches startGuiFadeOut to false if fullScreen and paused', () => {
      ({ store, wrapper } = setup({ fullScreen: true }));

      wrapper.simulate('mousemove');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.startGuiFadeOut).toBe(false);
    });

    it('dispatches startGuiFadeOut to false if fullScreen, !paused and startGuiFadeOut', () => {
      ({ store, wrapper } = setup({ fullScreen: true, paused: false, startGuiFadeOut: true }));

      wrapper.simulate('mousemove');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.startGuiFadeOut).toBe(false);
    });

    it('dispatches startGuiFadeOut to true if fullScreen, !paused and !startGuiFadeOut', () => {
      ({ store, wrapper } = setup({ fullScreen: true, paused: false, startGuiFadeOut: false }));

      wrapper.simulate('mousemove');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.startGuiFadeOut).toBe(true);
    });
  });
});
