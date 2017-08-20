import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import proxyquire from 'proxyquire';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';

import reducer from '../../../reducer/reducer';
import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';

proxyquire.noCallThru();

let jPlayers;
const id = 'TestPlayer';
const mockEvents = ({ ...props }) => <div {...props} />;
const EventsContainer = proxyquire('./eventsContainer', {
  './events': mockEvents,
}).default;
const setup = (newProps) => {
  const props = {
    updateMediaStatus: expect.createSpy(),
    ...newProps,
  };

  const state = {
    jPlayers,
  };

  const store = createStore(combineReducers({ jPlayers: reducer }), state);

  const wrapper = mount(
    <Provider store={store}>
      <EventsContainer {...props} />
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

describe('EventsContainer', () => {
  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  describe('onDurationChange', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('durationchange');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onDurationChange', () => {
      const onDurationChange = expect.createSpy();

      const { wrapper } = setup({ onDurationChange });

      wrapper.simulate('durationchange');

      expect(onDurationChange).toHaveBeenCalled();
    });
  });

  describe('onEnded', () => {
    it('pauses the media', () => {
      jPlayers[id].src = 'test.com';

      const { store, wrapper } = setup();

      wrapper.simulate('ended');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.paused).toBe(true);
    });

    it('updates the media status', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('ended');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onEnded', () => {
      const onEnded = expect.createSpy();
      const { wrapper } = setup({ onEnded });

      wrapper.simulate('ended');

      expect(onEnded).toHaveBeenCalled();
    });
  });

  describe('onError', () => {
    it('sets the error to urlNotSupported', () => {
      jPlayers[id].src = 'test.com';
      const { store, wrapper } = setup();

      wrapper.simulate('error');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.error).toEqual(urlNotSupportedError(jPlayers[id].src));
    });

    it('calls the users onError', () => {
      const onError = expect.createSpy();
      const { wrapper } = setup({ onError });

      wrapper.simulate('error');

      expect(onError).toHaveBeenCalled();
    });
  });

  describe('onPlay', () => {
    it('plays the media', () => {
      jPlayers[id].src = 'test.com';
      const { store, wrapper } = setup();

      wrapper.simulate('play');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.paused).toBe(false);
    });

    it('calls the users onPlay', () => {
      const onPlay = expect.createSpy();
      const { wrapper } = setup({ onPlay });

      wrapper.simulate('play');

      expect(onPlay).toHaveBeenCalled();
    });

    it('pauses the other jPlayers if pauseOthersOnPlay is true', () => {
      jPlayers[id].pauseOthersOnPlay = true;
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com',
      };
      const { wrapper, store } = setup();

      wrapper.simulate('play');

      const secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;

      expect(secondTestPlayer.paused).toBe(true);
    });

    it('doesnt pause the other jPlayers if pauseOthersOnPlay is not true', () => {
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com',
      };
      const { wrapper, store } = setup();

      wrapper.simulate('play');

      const secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;

      expect(secondTestPlayer.paused).toBe(false);
    });
  });

  describe('onProgress', () => {
    const currentMedia = {
      buffered: {
        start: i => i,
        end: i => i + 1,
        length: 2,
      },
    };

    it('updates the media status', () => {
      const { wrapper, props } = setup({ currentMedia });

      wrapper.simulate('progress');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('updates the bufferedTimeRanges to the medias buffer', () => {
      const { wrapper, store } = setup({ currentMedia });

      wrapper.simulate('progress');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.bufferedTimeRanges).toEqual([
        { start: 0, end: 1 },
        { start: 1, end: 2 },
      ]);
    });

    it('calls the users onProgress', () => {
      const onProgress = expect.createSpy();
      const { wrapper } = setup({ onProgress, currentMedia });

      wrapper.simulate('progress');

      expect(onProgress).toHaveBeenCalled();
    });
  });

  describe('onSeeked', () => {
    it('sets the seeking to false', () => {
      const { wrapper, store } = setup();

      wrapper.simulate('seeked');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.seeking).toBe(false);
    });

    it('calls the users onSeeked', () => {
      const onSeeked = expect.createSpy();
      const { wrapper } = setup({ onSeeked });

      wrapper.simulate('seeked');

      expect(onSeeked).toHaveBeenCalled();
    });
  });

  describe('onSeeking', () => {
    it('sets the seeking to true', () => {
      const { wrapper, store } = setup();

      wrapper.simulate('seeking');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.seeking).toBe(true);
    });

    it('calls the users onSeeking', () => {
      const onSeeking = expect.createSpy();
      const { wrapper } = setup({ onSeeking });

      wrapper.simulate('seeking');

      expect(onSeeking).toHaveBeenCalled();
    });
  });

  describe('onTimeUpdate', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('timeupdate');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onTimeUpdate', () => {
      const onTimeUpdate = expect.createSpy();

      const { wrapper } = setup({ onTimeUpdate });

      wrapper.simulate('timeupdate');

      expect(onTimeUpdate).toHaveBeenCalled();
    });
  });
});
