import expect from 'expect';
import * as actions from './actions';
import { actionTypes } from '../util/constants';

describe('jPlayer actions', () => {
  const jPlayerActionTypes = actionTypes.jPlayer;
  const id = 'jPlayer-1';

  it('should create an action to set the jPlayer options', () => {
    const key = 'verticalVolume';
    const value = true;
    const expectedAction = {
      type: jPlayerActionTypes.SET_OPTION,
      key,
      value,
      id,
    };

    expect(actions.setOption(key, value, id)).toEqual(expectedAction);
  });

  it('should create an action to set the media', () => {
    const media = {
      mp3: 'test',
      poster: 'test-poster',
    };
    const expectedAction = {
      type: jPlayerActionTypes.SET_MEDIA,
      media,
      id,
    };

    expect(actions.setMedia(media, id)).toEqual(expectedAction);
  });

  it('should create an action to clear the media', () => {
    const expectedAction = {
      type: jPlayerActionTypes.CLEAR_MEDIA,
      id,
    };

    expect(actions.clearMedia(id)).toEqual(expectedAction);
  });

  it('should create an action to play the media', () => {
    const time = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PLAY,
      time,
      id,
    };

    expect(actions.play({ time, id })).toEqual(expectedAction);
  });

  it('should create an action to pause the media', () => {
    const time = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PAUSE,
      time,
      id,
    };

    expect(actions.pause({ time, id })).toEqual(expectedAction);
  });

  it('should create an action to set the play head', () => {
    const percent = 30;
    const expectedAction = {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent,
      id,
    };

    expect(actions.setPlayHead(percent, id)).toEqual(expectedAction);
  });

  it('should create an action to set the volume', () => {
    const volume = 0.8;
    const expectedAction = {
      type: jPlayerActionTypes.VOLUME,
      volume,
      id,
    };

    expect(actions.setVolume(volume, id)).toEqual(expectedAction);
  });

  it('should create an action to mute the media', () => {
    const mute = true;
    const expectedAction = {
      type: jPlayerActionTypes.MUTE,
      mute,
      id,
    };

    expect(actions.setMute(mute, id)).toEqual(expectedAction);
  });

  it('should create an action to set the duration', () => {
    const remainingDuration = true;
    const expectedAction = {
      type: jPlayerActionTypes.DURATION,
      remainingDuration,
      id,
    };

    expect(actions.setDuration({ remainingDuration, id })).toEqual(expectedAction);
  });

  it('should create an action to set the playbackRate', () => {
    const playbackRate = 3.2;
    const expectedAction = {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate,
      id,
    };

    expect(actions.setPlaybackRate(playbackRate, id)).toEqual(expectedAction);
  });

  it('should create an action to set the loop', () => {
    const loop = true;
    const expectedAction = {
      type: jPlayerActionTypes.LOOP,
      loop,
      id,
    };

    expect(actions.setLoop(loop, id)).toEqual(expectedAction);
  });

  it('should create an action to set the fullScreen', () => {
    const fullScreen = true;
    const expectedAction = {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen,
      id,
    };

    expect(actions.setFullScreen(fullScreen, id)).toEqual(expectedAction);
  });

  it('should create an action to set the focus', () => {
    const expectedAction = {
      type: jPlayerActionTypes.FOCUS,
      id,
    };

    expect(actions.setFocus(id)).toEqual(expectedAction);
  });
});
