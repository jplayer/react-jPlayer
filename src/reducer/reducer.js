import { limitValue } from 'react-jplayer-utils';

import { initialState } from '../initializeOptions/initializeOptions';
import { actionNames, formats as supportedFormats, defaultStatus } from '../util/constants';
import urlNotSetError from '../util/errorHandlers/urlNotSetError';
import noFormatSupportedError from '../util/errorHandlers/noFormatSupportedError';

const updateFormats = (sources) => {
  const formats = [];

  Object.keys(sources).forEach((supplied) => {
    let canPlayType;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(supportedFormats[supplied].MEDIA)
        .canPlayType(supportedFormats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    formats.push({
      supplied,
      supported: canPlayType,
    });
  });

  return formats;
};

const setMedia = (media) => {
  let video;
  let src;
  let paused;
  let nonSupported = true;
  let error;

  const formats = updateFormats(media.sources);

  formats.forEach((format) => {
    if (format.supported && nonSupported) {
      video = supportedFormats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      paused = true;
      nonSupported = false;
    }
  });

  if (nonSupported) {
    error = noFormatSupportedError(
      `media.sources: '${Object.keys(media.sources).join(', ')}'`,
    );
  }

  return {
    ...defaultStatus,
    mediaSettings: {
      ...formats,
      video,
      nonSupported,
    },
    media,
    video,
    src,
    paused,
    error,
  };
};

const resetStatus = () => ({
  ...defaultStatus,
});

const play = (src, time) => {
  if (src) {
    return {
      paused: false,
      newTime: !isNaN(time) ? time : null,
    };
  }

  return {
    error: urlNotSetError(play.name),
  };
};

const pause = (src, time) => {
  if (src) {
    return {
      paused: true,
      newTime: !isNaN(time) ? time : null,
    };
  }

  return {
    error: urlNotSetError(pause.name),
  };
};

const setPlayHead = (src, percent) => {
  const limitedPercent = limitValue(percent, 0, 100);

  if (src) {
    return {
      playHeadPercent: limitedPercent,
    };
  }

  return {
    error: urlNotSetError(setPlayHead.name),
  };
};

const setVolume = volume => ({
  volume: limitValue(volume, 0, 1),
  muted: volume <= 0,
});

const setMute = mute => ({
  muted: mute,
});

// const focus = (jPlayer, { id }) => {
//   const newJPlayer = { ...jPlayer };
//   const firstKeyEnabledPlayer = Object.keys(newJPlayer).filter(key =>
//     newJPlayer[key].keyEnabled,
//   ).shift();

//   if (newJPlayer[id].keyEnabled) {
//     Object.keys(newJPlayer).forEach((key) => {
//       if (key === id) {
//         newJPlayer[key] = updateObject(newJPlayer[key], { focused: true });
//       } else {
//         newJPlayer[key] = updateObject(newJPlayer[key], { focused: false });
//       }
//     });
//   } else if (newJPlayer[firstKeyEnabledPlayer] !== undefined) {
//     const focusedPlayer = updateObject(newJPlayer[firstKeyEnabledPlayer], { focused: true });
//     return updateObject(newJPlayer, { [firstKeyEnabledPlayer]: focusedPlayer });
//   }
//   return newJPlayer;
// };

// const updatePlayer = (jPlayer, action) => {
//   switch (action.type) {
//     case actionNames.SET_OPTION:
//       switch (action.key) {
//         case 'media': {
//           const media = action.value;
//           if (Object.keys(media).some(v => v)) {
//             return setMedia(jPlayer, { media });
//           }
//           return clearMedia(jPlayer);
//         }
//         case 'playHeadPercent':
//           return setPlayHead(jPlayer, { percent: action.value });
//         case 'volume':
//           return setVolume(jPlayer, { volume: action.value });
//         case 'muted':
//           return setMute(jPlayer, { mute: action.value });
//         default:
//           return updateObject(jPlayer, { [action.key]: action.value });
//       }
//     case actionNames.SET_MEDIA:
//       return setMedia(jPlayer, action);
//     case actionNames.CLEAR_MEDIA:
//       return clearMedia(jPlayer);
//     case actionNames.PLAY:
//       return play(jPlayer, action);
//     case actionNames.PAUSE:
//       return pause(jPlayer, action);
//     case actionNames.PLAY_HEAD:
//       return setPlayHead(jPlayer, action);
//     case actionNames.VOLUME:
//       return setVolume(jPlayer, action);
//     case actionNames.MUTE:
//       return setMute(jPlayer, action);
//     default:
//       return null;
//   }
// };

const setOption = (state, key, value) => {
  switch (key) {
    case 'media': {
      if (Object.keys(value).some(v => v)) {
        return setMedia(value);
      }
      return resetStatus();
    }
    case 'playHeadPercent':
      return setPlayHead(state.src, value);
    case 'volume':
      return setVolume(value);
    case 'muted':
      return setMute(value);
    default:
      return {
        [key]: value,
      };
  }
};

const updateJPlayer = (state, action, value) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    ...value,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.SET_MEDIA:
      return updateJPlayer(state, action, setMedia(action.media));
    case actionNames.CLEAR_MEDIA:
      return updateJPlayer(state, action, resetStatus());
    case actionNames.PLAY:
      return updateJPlayer(state, action, play(state[action.id].src, action.time));
    case actionNames.PAUSE:
      return updateJPlayer(state, action, pause(state[action.id].src, action.time));
    case actionNames.PLAY_HEAD:
      return updateJPlayer(state, action, setPlayHead(state[action.id].src, action.percent));
    case actionNames.VOLUME:
      return updateJPlayer(state, action, setVolume(action.volume));
    case actionNames.MUTE:
      return updateJPlayer(state, action, setMute(action.mute));
    case actionNames.SET_OPTION:
      return updateJPlayer(state, action, setOption(state, action.key, action.value));
    default:
      return state;
  }
  // const jPlayer = updatePlayer(newState[action.id], action);

  // if (jPlayer !== null) {
  //   newState = updateObject(newState, {
  //     [action.id]: jPlayer,
  //   });

  //   return reducer(newState, {
  //     type: actionNames.FOCUS,
  //     id: action.id,
  //   });
  // }

  // if (action.type === actionNames.FOCUS) {
  //   newState = updateObject(newState, focus(newState, action));
  // }
};

export default reducer;
