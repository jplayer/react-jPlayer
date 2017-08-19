import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import proxyquire from 'proxyquire';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';

import jPlayers from '../../../reducer/reducer';
import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockEvents = ({ ...props }) => <div {...props} />;
const EventsContainer = proxyquire('./eventsContainer', {
  './events': mockEvents,
}).default;
const setup = (stateProperties, newProps) => {
  const props = {
    updateMediaStatus: expect.createSpy(),
    pauseOthers: expect.createSpy(),
    ...newProps,
  };

  const state = {
    jPlayers: {
      [id]: {
        ...stateProperties,
      },
    },
  };

  const store = createStore(combineReducers({ jPlayers }), state);

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
  describe('onDurationChange', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('durationchange');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onDurationChange', () => {
      const onDurationChange = expect.createSpy();

      const { wrapper } = setup(null, { onDurationChange });

      wrapper.simulate('durationchange');

      expect(onDurationChange).toHaveBeenCalled();
    });
  });

  describe('onEnded', () => {
    it('pauses the media', () => {
      const { store, wrapper } = setup({ src: 'test.com' });

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
      const { wrapper } = setup(null, { onEnded });

      wrapper.simulate('ended');

      expect(onEnded).toHaveBeenCalled();
    });
  });

  describe('onError', () => {
    it('sets the error to urlNotSupported', () => {
      const src = 'test.com';
      const { store, wrapper } = setup({ src });

      wrapper.simulate('error');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.error).toEqual(urlNotSupportedError(src));
    });

    it('calls the users onError', () => {
      const onError = expect.createSpy();
      const { wrapper } = setup(null, { onError });

      wrapper.simulate('error');

      expect(onError).toHaveBeenCalled();
    });
  });

  describe('onPlay', () => {
    it('plays the media', () => {
      const { store, wrapper } = setup({ src: 'test.com' });

      wrapper.simulate('play');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.paused).toBe(false);
    });

    it('calls the users onPlay', () => {
      const onPlay = expect.createSpy();
      const { wrapper } = setup(null, { onPlay });

      wrapper.simulate('play');

      expect(onPlay).toHaveBeenCalled();
    });

    it('pauses the other jPlayers if pauseOthersOnPlay is true', () => {
      const { wrapper, props } = setup({ pauseOthersOnPlay: true });

      wrapper.simulate('play');

      expect(props.pauseOthers).toHaveBeenCalled();
    });

    it('doesnt pause the other jPlayers if pauseOthersOnPlay is not true', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('play');

      expect(props.pauseOthers).toNotHaveBeenCalled();
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
      const { wrapper, props } = setup(null, { currentMedia });

      wrapper.simulate('progress');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('updates the bufferedTimeRanges to the medias buffer', () => {
      const { wrapper, store } = setup(null, { currentMedia });

      wrapper.simulate('progress');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.bufferedTimeRanges).toEqual([
        { start: 0, end: 1 },
        { start: 1, end: 2 },
      ]);
    });

    it('calls the users onProgress', () => {
      const onProgress = expect.createSpy();
      const { wrapper } = setup(null, { onProgress, currentMedia });

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
      const { wrapper } = setup(null, { onSeeked });

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
      const { wrapper } = setup(null, { onSeeking });

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

      const { wrapper } = setup(null, { onTimeUpdate });

      wrapper.simulate('timeupdate');

      expect(onTimeUpdate).toHaveBeenCalled();
    });
  });
});
