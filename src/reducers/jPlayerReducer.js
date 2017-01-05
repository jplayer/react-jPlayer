import screenfull from 'screenfull';
import get from 'lodash/get';
import set from 'lodash/set';

import { actionTypes, classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes } from '../util/constants';
import { testCanPlayType, absoluteMediaUrls, validString, limitValue, updateObject, urlNotSetError, noFormatSupportedError } from '../util/index';
import { statusDefaultValues } from '../containers/jPlayer';

const clearMedia = state =>
    // if(!nextProps.nativeVideoControls) {
    //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
    // }

   updateObject(state, {
     seeking: false,
     ...statusDefaultValues,
   });

const setMedia = (state, { media }) => {
  let	supported = false;

  state = updateObject(clearMedia(state), { media: absoluteMediaUrls(media) });

  for (const priority in state.mediaSettings.formats) {
    const format = state.mediaSettings.formats[priority];

    if (state.mediaSettings.playableFormat[format] && validString(media[format])) { // Format supported in solution and url given for format.
      if (state.mediaSettings.video) {
        state.video = true;
            // this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
            // if(this.props.nativeVideoControls) {
                //     this.video.element().poster = validString(media.poster) ? media.poster : "";
                // }
      } else {
        state.video = false;
            // this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
      }
      if (state.mediaSettings.playableFormat[format] && media[format]) {
        state.src = media[format];
        state.formatType = format;
        state.format = { [format]: true };
      }
      supported = true;
      break;
    }
  }

  if (supported) {
    state.srcSet = true;
    state.paused = true;
  } else {
    state.error = noFormatSupportedError(`{supplied: '${state.supplied.join(', ')}'}`);
  }
  return state;
};

const play = (state, { time }) => {
  if (state.srcSet) {
    return updateObject(state, {
      paused: false,
      newTime: !isNaN(time) ? time : state.currentTime,
    });
  } else {
    return updateObject(state, {
      error: urlNotSetError(play.name),
    });
  }
};

const pause = (state, { time }) => {
  if (state.srcSet) {
    return updateObject(state, {
      paused: true,
      newTime: !isNaN(time) ? time : state.currentTime,
    });
  } else {
    return updateObject(state, {
      error: urlNotSetError(pause.name),
    });
  }
  return state;
};

const playHead = (state, { percent }) => {
  const limitedPercent = limitValue(percent, 0, 100);

  if (state.srcSet) {
    return updateObject(state, {
      playHeadPercent: limitedPercent,
    });
  } else {
    return updateObject(state, {
      error: urlNotSetError(playHead.name),
    });
  }
  return state;
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
  fullScreenValue ? screenfull.request(document.getElementById(element)) : screenfull.exit();
  return state;
};

const focus = (state, { id }) => {
  const firstKeyEnabledPlayer = Object.keys(state).filter(key => state[key].keyEnabled).shift();

  if (state[id].keyEnabled) {
    Object.keys(state).forEach(key => state[key] = (key === id) ? updateObject(state[key], { focus: true }) : updateObject(state[key], { focus: false }));
    return state;
  } else if (state[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = updateObject(state[firstKeyEnabledPlayer], { focus: true });
    return updateObject(state, { [firstKeyEnabledPlayer]: focusedPlayer });
  }
};

const isInitializing = actionType => !Object.keys(actionTypes.jPlayer).every(currentActionType => currentActionType !== actionType);

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
      return volume(mute(jPlayer, action > 0 ? false : true), action);
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

  Object.keys(state).forEach((key) => {
    const jPlayer = state[key];

    jPlayer.global.forEach((actionType) => {
      if (key !== action.id && action.type === actionType) {
        state = updateObject(state, {
          [key]: updatePlayer(state[key], action, actionType),
        });
      }
    });
  });

  switch (action.type) {
    case actionTypes.jPlayer.FOCUS:
      return updateObject(state, focus(state, action));
    default:
      state = updateObject(state, {
        [action.id]: updatePlayer(state[action.id], action),
      });

      return jPlayerReducer(state, {
        type: actionTypes.jPlayer.FOCUS,
        id: action.id,
      });
  }
};

export default jPlayerReducer;
