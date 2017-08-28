import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';
import containerSetup from '../../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockEvents = ({ events }) => <div {...events} />;
const EventsContainer = proxyquire('./eventsContainer', {
  './events': mockEvents,
}).default;

const setup = (jPlayers, props) => containerSetup(EventsContainer, jPlayers, {
  updateMediaStatus: expect.createSpy(),
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
      const onDurationChange = expect.createSpy();

      const { wrapper } = setup(jPlayers, { onDurationChange });

      wrapper.simulate('durationchange');

      expect(onDurationChange).toHaveBeenCalled();
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
      const onEnded = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onEnded });

      wrapper.simulate('ended');

      expect(onEnded).toHaveBeenCalled();
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
      const onError = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onError });

      wrapper.simulate('error');

      expect(onError).toHaveBeenCalled();
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
      const onPlay = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onPlay });

      wrapper.simulate('play');

      expect(onPlay).toHaveBeenCalled();
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
    const currentMedia = {
      buffered: {
        start: i => i,
        end: i => i + 1,
        length: 2,
      },
    };

    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers, { currentMedia });

      wrapper.simulate('progress');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('updates the bufferedTimeRanges to the medias buffer', () => {
      const { wrapper, store } = setup(jPlayers, { currentMedia });

      wrapper.simulate('progress');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.bufferedTimeRanges).toEqual([
        { start: 0, end: 1 },
        { start: 1, end: 2 },
      ]);
    });

    it('calls the users onProgress', () => {
      const onProgress = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onProgress, currentMedia });

      wrapper.simulate('progress');

      expect(onProgress).toHaveBeenCalled();
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
      const onSeeked = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onSeeked });

      wrapper.simulate('seeked');

      expect(onSeeked).toHaveBeenCalled();
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
      const onSeeking = expect.createSpy();
      const { wrapper } = setup(jPlayers, { onSeeking });

      wrapper.simulate('seeking');

      expect(onSeeking).toHaveBeenCalled();
    });
  });

  describe('onTimeUpdate', () => {
    it('updates the media status', () => {
      const { wrapper, props } = setup(jPlayers);

      wrapper.simulate('timeupdate');

      expect(props.updateMediaStatus).toHaveBeenCalled();
    });

    it('calls the users onTimeUpdate', () => {
      const onTimeUpdate = expect.createSpy();

      const { wrapper } = setup(jPlayers, { onTimeUpdate });

      wrapper.simulate('timeupdate');

      expect(onTimeUpdate).toHaveBeenCalled();
    });
  });
});
