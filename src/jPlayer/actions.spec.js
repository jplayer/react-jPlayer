import expect from 'expect';
import * as actions from './actions';
import { actionTypes } from '../util/constants';

describe('jPlayer actions', () => {
  const jPlayerActionTypes = actionTypes.jPlayer;
  const uid = 'player-1';

  it('should create an action to set the jPlayer options', () => {
    const key = 'verticalVolume';
    const value = true;
    const expectedAction = {
      type: jPlayerActionTypes.SET_OPTION,
      key,
      value,
      uid,
    };

    expect(actions.setOption(key, value, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the media', () => {
    const media = {
      mp3: 'test',
      poster: 'test-poster',
    };
    const expectedAction = {
      type: jPlayerActionTypes.SET_MEDIA,
      media,
      uid,
    };

    expect(actions.setMedia(media, uid)).toEqual(expectedAction);
  });

  it('should create an action to clear the media', () => {
    const expectedAction = {
      type: jPlayerActionTypes.CLEAR_MEDIA,
      uid,
    };

    expect(actions.clearMedia(uid)).toEqual(expectedAction);
  });

  it('should create an action to play the media', () => {
    const time = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PLAY,
      time,
      uid,
    };

    expect(actions.play(uid, time)).toEqual(expectedAction);
  });

  it('should create an action to pause the media', () => {
    const time = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PAUSE,
      time,
      uid,
    };

    expect(actions.pause(uid, time)).toEqual(expectedAction);
  });

  it('should create an action to set the play head', () => {
    const percent = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent,
      uid,
    };

    expect(actions.setPlayHead(percent, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the volume', () => {
    const volume = 0.8;
    const expectedAction = {
      type: jPlayerActionTypes.VOLUME,
      volume,
      uid,
    };

    expect(actions.setVolume(volume, uid)).toEqual(expectedAction);
  });

  it('should create an action to mute the media', () => {
    const mute = true;
    const expectedAction = {
      type: jPlayerActionTypes.MUTE,
      mute,
      uid,
    };

    expect(actions.setMute(mute, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the duration', () => {
    const remainingDuration = true;
    const expectedAction = {
      type: jPlayerActionTypes.DURATION,
      remainingDuration,
      uid,
    };

    expect(actions.setDuration(uid, remainingDuration)).toEqual(expectedAction);
  });

  it('should create an action to set the playbackRate', () => {
    const playbackRate = 3.2;
    const expectedAction = {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate,
      uid,
    };

    expect(actions.setPlaybackRate(playbackRate, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the loop', () => {
    const loop = true;
    const expectedAction = {
      type: jPlayerActionTypes.LOOP,
      loop,
      uid,
    };

    expect(actions.setLoop(loop, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the fullScreen', () => {
    const fullScreen = true;
    const expectedAction = {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen,
      uid,
    };

    expect(actions.setFullScreen(fullScreen, uid)).toEqual(expectedAction);
  });

  it('should create an action to set the focus', () => {
    const expectedAction = {
      type: jPlayerActionTypes.FOCUS,
      uid,
    };

    expect(actions.setFocus(uid)).toEqual(expectedAction);
  });
});
