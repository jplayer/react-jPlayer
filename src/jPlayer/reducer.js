import { actionTypes, formats, defaultOptions, statusDefaultValues } from '../util/constants';
import { limitValue, updateObject, urlNotSetError, noFormatSupportedError } from '../util/index';

const clearMedia = state =>
    // if(!nextProps.nativeVideoControls) {
    //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classes.HIDDEN)));
    // }

   updateObject(state, {
     seeking: false,
     ...statusDefaultValues,
   });

const updateFormats = (state, media) => {
  const newMediaSettings = { ...state.mediaSettings };
  const newFormats = [];

  Object.keys(media.sources).forEach((supplied) => {
    const mediaElement = document.createElement(formats[supplied].MEDIA);

    newFormats.push({
      supplied,
      supported: mediaElement.canPlayType(formats[supplied].CODEC),
    });
  });

  newMediaSettings.formats = newFormats;

  return updateObject(state, {
    mediaSettings: newMediaSettings,
  });
};

const setMedia = (state, { media }) => {
  let foundSupported = false;
  const newState = {
    ...state,
    ...clearMedia(state),
    ...updateFormats(state, media),
  };

  newState.mediaSettings.formats.forEach((format) => {
    if (format.supported) {
      newState.mediaSettings.video = formats[format.supplied].MEDIA === 'video';
      newState.src = media.sources[format.supplied];
      newState.paused = true;
      foundSupported = true;
    }
  });

  if (!foundSupported) {
    newState.error = noFormatSupportedError(`{supplied: '${newState.supplied.join(', ')}'}`);
  }
  newState.media = updateObject(defaultOptions.media, media);

  return newState;
};

const play = (state, { time }) => {
  if (state.src) {
    return updateObject(state, {
      paused: false,
      newTime: !isNaN(time) ? time : state.newTime,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(play.name),
  });
};

const pause = (state, { time }) => {
  if (state.src) {
    return updateObject(state, {
      paused: true,
      newTime: !isNaN(time) ? time : state.newTime,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(pause.name),
  });
};

const setPlayHead = (state, { percent }) => {
  const limitedPercent = limitValue(percent, 0, 100);

  if (state.src) {
    return updateObject(state, {
      playHeadPercent: limitedPercent,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(setPlayHead.name),
  });
};

const setVolume = (state, { volume }) => updateObject(state, {
  volume: limitValue(volume, 0, 1),
});

const setMute = (state, { mute }) => updateObject(state, {
  muted: mute,
});

const setDuration = (state, { remainingDuration }) => updateObject(state, {
  remainingDuration: !remainingDuration,
});

const setPlaybackRate = (state, { playbackRate }) => updateObject(state, {
  playbackRate: limitValue(playbackRate, state.minPlaybackRate, state.maxPlaybackRate),
});

const setLoop = (state, { loop }) => updateObject(state, {
  loop,
});

const setFullScreen = (state, { fullScreen }) => updateObject(state, {
  fullScreen,
});

const setFocus = (state, { uid }) => {
  const newState = { ...state };
  const firstKeyEnabledPlayer = Object.keys(state).filter(key => newState[key].keyEnabled).shift();

  if (newState[uid].keyEnabled) {
    Object.keys(state).forEach((key) => {
      if (key === uid) {
        newState[key] = updateObject(newState[key], { focus: true });
      } else {
        newState[key] = updateObject(newState[key], { focus: false });
      }
    });
  } else if (newState[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = updateObject(newState[firstKeyEnabledPlayer], { focus: true });
    return updateObject(newState, { [firstKeyEnabledPlayer]: focusedPlayer });
  }
  return newState;
};

const isInitializing = actionType => (
  !Object.keys(actionTypes.jPlayer).every(currentActionType => currentActionType !== actionType)
);

const updatePlayer = (jPlayer = {}, action, actionType = action.type) => {
  switch (actionType) {
    case actionTypes.jPlayer.SET_OPTION:
      return updateObject(jPlayer, { [action.key]: action.value });
    case actionTypes.jPlayer.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case actionTypes.jPlayer.SET_MEDIA:
      return setMedia(jPlayer, action);
    case actionTypes.jPlayer.PLAY:
      return play(jPlayer, action);
    case actionTypes.jPlayer.PAUSE:
      return pause(jPlayer, action);
    case actionTypes.jPlayer.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case actionTypes.jPlayer.VOLUME:
      return setVolume(setMute(jPlayer, { mute: action.volume <= 0 }), action);
    case actionTypes.jPlayer.MUTE:
      return setMute(jPlayer, action);
    case actionTypes.jPlayer.DURATION:
      return setDuration(jPlayer, action);
    case actionTypes.jPlayer.PLAYBACK_RATE:
      return setPlaybackRate(jPlayer, action);
    case actionTypes.jPlayer.LOOP:
      return setLoop(jPlayer, action);
    case actionTypes.jPlayer.FULL_SCREEN:
      return setFullScreen(jPlayer, action);
    default:
      return jPlayer;
  }
};

const setGlobalOptions = (state, action) => {
  let newState = { ...state };

  Object.keys(newState).forEach((key) => {
    const jPlayer = newState[key];

    jPlayer.global.forEach((actionType) => {
      if (key !== action.uid && action.type === actionType) {
        newState = updateObject(newState, {
          [key]: updatePlayer(newState[key], action, actionType),
        });
      }
    });
  });
  return newState;
};

const jPlayerReducer = (state = {}, action) => {
  if (!isInitializing(action.type)) {
    return state;
  }
  let newState = { ...state };

  switch (action.type) {
    case actionTypes.jPlayer.FOCUS:
      return updateObject(newState, setFocus(newState, action));
    default:
      newState = setGlobalOptions(state, action);
      newState = updateObject(newState, {
        [action.uid]: updatePlayer(newState[action.uid], action),
      });

      return jPlayerReducer(newState, {
        type: actionTypes.jPlayer.FOCUS,
        uid: action.uid,
      });
  }
};

export default jPlayerReducer;
