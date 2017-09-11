/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import EventsContainer from './eventsContainer';
import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';
import containerSetup from '../../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const events = {
  onAbort: expect.createSpy(),
  onCanPlay: expect.createSpy(),
  onCanPlayThrough: expect.createSpy(),
  onDurationChange: expect.createSpy(),
  onEmptied: expect.createSpy(),
  onEncrypted: expect.createSpy(),
  onEnded: expect.createSpy(),
  onError: expect.createSpy(),
  onLoadedData: expect.createSpy(),
  onLoadedMetadata: expect.createSpy(),
  onLoadStart: expect.createSpy(),
  onPause: expect.createSpy(),
  onPlay: expect.createSpy(),
  onPlaying: expect.createSpy(),
  onProgress: expect.createSpy(),
  onRateChange: expect.createSpy(),
  onSeeked: expect.createSpy(),
  onSeeking: expect.createSpy(),
  onStalled: expect.createSpy(),
  onSuspend: expect.createSpy(),
  onTimeUpdate: expect.createSpy(),
  onVolumeChange: expect.createSpy(),
  onWaiting: expect.createSpy(),
};
const setup = (jPlayers, props) => containerSetup(EventsContainer, jPlayers, {
  children: <audio />,
  updateMediaStatus: expect.createSpy(),
  ...events,
  ...props,
});

describe('EventsContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  describe('onDurationChange', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('durationchange');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onDurationChange', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('durationchange');

      expect(props.onDurationChange).toHaveBeenCalled();
      expect(props.onDurationChange.calls[0].arguments[0].type).toBe('durationchange');
    });
  });

  describe('onEnded', () => {
    it('pauses the media', () => {
      jPlayers[id].src = 'test.com';

      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('ended');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.paused).toBe(true);
    });

    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('ended');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onEnded', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('ended');

      expect(props.onEnded).toHaveBeenCalled();
      expect(props.onEnded.calls[0].arguments[0].type).toBe('ended');
    });
  });

  describe('onError', () => {
    it('sets the error to urlNotSupported', () => {
      jPlayers[id].src = 'test.com';
      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('error');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.error).toEqual(urlNotSupportedError(jPlayers[id].src));
    });

    it('calls the users onError', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('error');

      expect(props.onError).toHaveBeenCalled();
      expect(props.onError.calls[0].arguments[0].type).toBe('error');
    });
  });

  describe('onPlay', () => {
    it('plays the media', () => {
      jPlayers[id].src = 'test.com';
      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('play');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.paused).toBe(false);
    });

    it('calls the users onPlay', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('play');

      expect(props.onPlay).toHaveBeenCalled();
      expect(props.onPlay.calls[0].arguments[0].type).toBe('play');
    });

    it('pauses the other jPlayers if pauseOthersOnPlay is true', () => {
      jPlayers[id].pauseOthersOnPlay = true;
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com',
      };
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('play');

      const secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;

      expect(secondTestPlayer.paused).toBe(true);
    });

    it('doesnt pause the other jPlayers if pauseOthersOnPlay is not true', () => {
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com',
      };
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('play');

      const secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;

      expect(secondTestPlayer.paused).toBe(false);
    });
  });

  describe('onProgress', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('progress');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onProgress', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('progress');

      expect(props.onProgress).toHaveBeenCalled();
      expect(props.onProgress.calls[0].arguments[0].type).toBe('progress');
    });
  });

  describe('onSeeked', () => {
    it('sets the seeking to false', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('seeked');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.seeking).toBe(false);
    });

    it('calls the users onSeeked', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('seeked');

      expect(props.onSeeked).toHaveBeenCalled();
      expect(props.onSeeked.calls[0].arguments[0].type).toBe('seeked');
    });
  });

  describe('onSeeking', () => {
    it('sets the seeking to true', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('seeking');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.seeking).toBe(true);
    });

    it('calls the users onSeeking', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('seeking');

      expect(props.onSeeking).toHaveBeenCalled();
      expect(props.onSeeking.calls[0].arguments[0].type).toBe('seeking');
    });
  });

  describe('onTimeUpdate', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('timeupdate');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onTimeUpdate', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('timeupdate');

      expect(props.onTimeUpdate).toHaveBeenCalled();
      expect(props.onTimeUpdate.calls[0].arguments[0].type).toBe('timeupdate');
    });
  });

  afterEach(() => {
    Object.keys(events).forEach(key => events[key].reset());
  });
});
