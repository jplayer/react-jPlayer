import screenfull from 'screenfull';

import { actionTypes } from '../util/constants';
import { absoluteMediaUrls, limitValue,
  updateObject, urlNotSetError, noFormatSupportedError } from '../util/index';
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
  let supported = false;
  let newState = { ...state };

  newState = updateObject(clearMedia(newState), {
    media: absoluteMediaUrls(media),
  });

  newState.mediaSettings.formats.forEach((priority) => {
    const format = newState.mediaSettings.formats[priority];

    if (newState.mediaSettings.playableFormat[format] && !supported) {
      if (newState.mediaSettings.video) {
        newState.video = true;
            // this.setnewState(newState => reducer.removeFromArrayByValue(newState, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
            // if(this.props.nativeVideoControls) {
                //     this.video.element().poster = media.poster;
                // }
      } else {
        newState.video = false;
            // this.setnewState(newState => reducer.addUniqueToArray(newState, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
      }
      if (newState.mediaSettings.playableFormat[format] && media[format]) {
        newState.src = media[format];
        newState.formatType = format;
        newState.format = { [format]: true };
      }
      supported = true;
    }
  });

  if (supported) {
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
      newTime: !isNaN(time) ? time : state.currentTime,
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
      newTime: !isNaN(time) ? time : state.currentTime,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(pause.name),
  });
};

const playHead = (state, { percent }) => {
  const limitedPercent = limitValue(percent, 0, 100);

  if (state.srcSet) {
    return updateObject(state, {
      playHeadPercent: limitedPercent,
    });
  }
  return updateObject(state, {
    error: urlNotSetError(playHead.name),
  });
};

const volume = (state, volumeValue) => updateObject(state, {
  volume: limitValue(volumeValue, 0, 1),
});

const mute = (state, muteValue) => updateObject(state, {
  muted: muteValue,
});

const duration = (state, { remainingDuration }) => updateObject(state, {
  remainingDuration: !remainingDuration,
});

const playbackRate = (state, { playbackRateValue }) => updateObject(state, {
  playbackRate: limitValue(playbackRateValue, state.minPlaybackRate, state.maxPlaybackRate),
});

const loop = (state, { loopValue }) => updateObject(state, {
  loop: loopValue,
});

const fullScreen = (state, { fullScreenValue, element = state.id }) => {
  if (fullScreenValue) {
    screenfull.request(document.getElementById(element));
  } else {
    screenfull.exit();
  }
  return state;
};

const focus = (state, { id }) => {
  const firstKeyEnabledPlayer = Object.keys(state).filter(key => state[key].keyEnabled).shift();

  debugger;
  if (state[id].keyEnabled) {
    Object.keys(state).forEach(key => ((key === id) ? updateObject(state[key], { focus: true })
            : updateObject(state[key], { focus: false })));
  } else if (state[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = updateObject(state[firstKeyEnabledPlayer], { focus: true });
    return updateObject(state, { [firstKeyEnabledPlayer]: focusedPlayer });
  }
  return state;
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
      return playHead(jPlayer, action);
    case actionTypes.jPlayer.VOLUME:
      return volume(mute(jPlayer, action > 0), action);
    case actionTypes.jPlayer.MUTE:
      return mute(jPlayer, action);
    case actionTypes.jPlayer.DURATION:
      return duration(jPlayer, action);
    case actionTypes.jPlayer.PLAYBACK_RATE:
      return playbackRate(jPlayer, action);
    case actionTypes.jPlayer.LOOP:
      return loop(jPlayer, action);
    case actionTypes.jPlayer.FULL_SCREEN:
      return fullScreen(jPlayer, action);
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
      return updateObject(newState, focus(newState, action));
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
