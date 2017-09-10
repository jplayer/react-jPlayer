/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import containerSetup from '../../util/specHelpers/containerSetup.spec';

import { setMedia, setOption, setVolume, setMute, setPlayHead, play, pause } from '../../actions/actions';

proxyquire.noCallThru();

let mockCurrentMedia;
const id = 'TestPlayer';
const mockMedia = ({ setCurrentMedia }) => {
  const mockRef = () => {
    setCurrentMedia(mockCurrentMedia);
  };

  return <audio ref={mockRef} />;
};
const MediaContainer = proxyquire('./mediaContainer', {
  './media': mockMedia,
}).default;
const setup = (jPlayers, props) => containerSetup(MediaContainer, jPlayers, {
  children: <audio />,
  ...props,
});

describe('MediaContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        src: 'www.test.com',
        playHeadPercent: 0,
        paused: false,
        loop: false,
        autoplay: false,
        defaultPlaybackRate: 0,
        muted: false,
        plabackRate: 0,
        preload: 'auto',
        volume: 0,
        media: {
          tracks: [
            { src: 'www.test.vrt' },
          ],
        },
      },
    };
    mockCurrentMedia = {
      seekable: {
        length: 1,
        end: expect.createSpy().andReturn(100),
      },
      pause: expect.createSpy(),
      play: expect.createSpy(),
    };
  });

  describe('onLoad', () => {
    it('sets src if src not null', () => {
      setup(jPlayers);

      expect(mockCurrentMedia.src).toBe(jPlayers[id].src);
    });

    it('doesnt set src if src null', () => {
      jPlayers[id].src = null;

      setup(jPlayers);

      expect(mockCurrentMedia.src).toBe(undefined);
    });

    it('sets other media values on load', () => {
      setup(jPlayers);

      expect(mockCurrentMedia.defaultPlaybackRate).toBe(jPlayers[id].defaultPlaybackRate);
      expect(mockCurrentMedia.playbackRate).toBe(jPlayers[id].playbackRate);
      expect(mockCurrentMedia.preload).toBe(jPlayers[id].preload);
      expect(mockCurrentMedia.volume).toBe(jPlayers[id].volume);
      expect(mockCurrentMedia.muted).toBe(jPlayers[id].muted);
      expect(mockCurrentMedia.autoplay).toBe(jPlayers[id].autoplay);
      expect(mockCurrentMedia.loop).toBe(jPlayers[id].loop);
    });
  });

  describe('onUpdate', () => {
    it('updates media src if src changes', () => {
      const mediaElement = document.createElement('audio');
      const media = {
        sources: {
          mp3: 'www.test.mp3',
        },
      };

      const { store } = setup(jPlayers);

      expect.spyOn(document, 'createElement').andReturn(mediaElement);
      expect.spyOn(mediaElement, 'canPlayType').andReturn('probably');

      store.dispatch(setMedia(id, media));

      expect(mockCurrentMedia.src).toBe(media.sources.mp3);
    });

    it('updates other media values on change', () => {
      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'defaultPlaybackRate', 0.3));
      store.dispatch(setOption(id, 'playbackRate', 0.45));
      store.dispatch(setOption(id, 'preload', true));
      store.dispatch(setVolume(id, 0.77));
      store.dispatch(setMute(id, true));
      store.dispatch(setOption(id, 'autoplay', true));
      store.dispatch(setOption(id, 'loop', true));

      expect(mockCurrentMedia.defaultPlaybackRate).toBe(0.3);
      expect(mockCurrentMedia.playbackRate).toBe(0.45);
      expect(mockCurrentMedia.preload).toBe(true);
      expect(mockCurrentMedia.volume).toBe(0.77);
      expect(mockCurrentMedia.muted).toBe(true);
      expect(mockCurrentMedia.autoplay).toBe(true);
      expect(mockCurrentMedia.loop).toBe(true);
    });

    it('updates the media time on new time change', () => {
      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'newTime', 222));

      const jPlayer = store.getState().jPlayers[id];

      expect(mockCurrentMedia.currentTime).toBe(222);
      expect(jPlayer.newTime).toBe(null);
    });

    describe('updateMediaTimeAfterSeeking', () => {
      it(`when the media is seekable it updates currentTime 
          and currentPercentRelative`, () => {
          const { store } = setup(jPlayers);

          store.dispatch(setPlayHead(id, 22));

          const jPlayer = store.getState().jPlayers[id];

          expect(mockCurrentMedia.currentTime).toBe(22);
          expect(jPlayer.currentPercentRelative).toBe(22);
        });

      it(`when the media has an infinitly seekable 
          it does not update the currentTime and currentPercentRelative`, () => {
          const { store } = setup(jPlayers);

          mockCurrentMedia.seekable.end = expect.createSpy().andReturn(Infinity);

          store.dispatch(setPlayHead(id, 22));

          const jPlayer = store.getState().jPlayers[id];

          expect(mockCurrentMedia.currentTime).toNotBe(22);
          expect(jPlayer.currentPercentRelative).toNotBe(22);
        });
    });

    describe('updateMediaPlayState', () => {
      it('pauses the media when paused', () => {
        const { store } = setup(jPlayers);

        store.dispatch(pause(id));

        expect(mockCurrentMedia.pause).toHaveBeenCalled();
      });

      it('plays the media when paused is not true', () => {
        jPlayers[id].paused = true;

        const { store } = setup(jPlayers);

        store.dispatch(play(id));

        expect(mockCurrentMedia.play).toHaveBeenCalled();
      });
    });
  });

  afterEach(() => {
    expect.restoreSpies();
  });
});
