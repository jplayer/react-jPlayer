import screenfull from 'screenfull';

import { actionTypes } from '../util/constants';
import { limitValue, updateObject, urlNotSetError, noFormatSupportedError } from '../util/index';
import { statusDefaultValues } from '../containers/jPlayer';

const clearMedia = state =>
    // if(!nextProps.nativeVideoControls) {
    //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classes.HIDDEN)));
    // }

   updateObject(state, {
     seeking: false,
     ...statusDefaultValues,
   });

const setMedia = (state, { media }) => {
  let foundSupported = false;
  const newState = {
    ...state,
    ...updateObject(clearMedia(state)),
  };

  Object.entries(newState.mediaSettings.supportedFormats).forEach((val) => {
    const format = val[0];
    const canPlay = val[1];

    if (!foundSupported) {
      if (newState.mediaSettings.video) {
            // this.setnewState(newState => reducer.removeFromArrayByValue(newState, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
            // if(this.props.nativeVideoControls) {
                //     this.video.element().poster = media.poster;
                // }
      } else {
            // this.setnewState(newState => reducer.addUniqueToArray(newState, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
      }
      if (canPlay) {
        newState.src = media.sources[format];
        newState.formatType = format;
        foundSupported = true;
      }
    }
  });

  if (foundSupported) {
    newState.srcSet = true;
    newState.paused = true;
  } else {
    newState.error = noFormatSupportedError(`{supplied: '${newState.supplied.join(', ')}'}`);
  }
  return newState;
};

const play = (state, { time }) => {
  if (state.srcSet) {
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
  if (state.srcSet) {
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

  if (state.srcSet) {
    return updateObject(state, {
      playHeadPercent: limitedPercent,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(setPlayHead.name),
  });
};

const setVolume = (state, { volumeValue }) => updateObject(state, {
  volume: limitValue(volumeValue, 0, 1),
});

const setMute = (state, { muteValue }) => updateObject(state, {
  muted: muteValue,
});

const setDuration = (state, { remainingDuration }) => updateObject(state, {
  remainingDuration: !remainingDuration,
});

const setPlaybackRate = (state, { playbackRateValue }) => updateObject(state, {
  playbackRate: limitValue(playbackRateValue, state.minPlaybackRate, state.maxPlaybackRate),
});

const setLoop = (state, { loopValue }) => updateObject(state, {
  loop: loopValue,
});

const setFullScreen = (state, { fullScreenValue, id }) => {
  if (fullScreenValue) {
    screenfull.request(document.getElementById(id));
  } else {
    screenfull.exit();
  }
  return state;
};

const setFocus = (state, { id }) => {
  const newState = { ...state };
  const firstKeyEnabledPlayer = Object.keys(state).filter(key => newState[key].keyEnabled).shift();

  if (newState[id].keyEnabled) {
    Object.keys(state).forEach((key) => {
      if (key === id) {
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
    case actionTypes.jPlayer.UPDATE_OPTION:
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
      return setVolume(setMute(jPlayer, { muteValue: action.volumeValue <= 0 }), action);
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

const jPlayerReducer = (state = {}, action) => {
  if (!isInitializing(action.type)) return state;
  let newState = { ...state };

  Object.keys(newState).forEach((key) => {
    const jPlayer = newState[key];

    jPlayer.global.forEach((actionType) => {
      if (key !== action.id && action.type === actionType) {
        newState = updateObject(newState, {
          [key]: updatePlayer(newState[key], action, actionType),
        });
      }
    });
  });

  switch (action.type) {
    case actionTypes.jPlayer.FOCUS:
      return updateObject(newState, setFocus(newState, action));
    default:
      newState = updateObject(newState, {
        [action.id]: updatePlayer(newState[action.id], action),
      });

      return jPlayerReducer(newState, {
        type: actionTypes.jPlayer.FOCUS,
        id: action.id,
      });
  }
};

export default jPlayerReducer;
