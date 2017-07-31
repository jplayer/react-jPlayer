import { updateObject } from 'react-jplayer-utils';

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
  let foundSupported;
  let error;

  const formats = updateFormats(media.sources);

  formats.forEach((format) => {
    if (format.supported && !foundSupported) {
      video = supportedFormats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      paused = true;
      foundSupported = true;
    }
  });

  if (!foundSupported) {
    error = noFormatSupportedError(
      `media.sources: '${Object.keys(media.sources).join(', ')}'`,
    );
  }

  return {
    ...defaultStatus,
    mediaSettings: {
      ...formats,
      video,
      foundSupported,
    },
    media,
    video,
    src,
    paused,
    error,
  };
};

const play = (jPlayer, { time }) => {
  if (jPlayer.src) {
    return updateObject(jPlayer, {
      paused: false,
      newTime: !isNaN(time) ? time : jPlayer.newTime,
    });
  }
  return updateObject(jPlayer, {
    error: urlNotSetError(play.name),
  });
};

const pause = (jPlayer, { time }) => {
  if (jPlayer.src) {
    return updateObject(jPlayer, {
      paused: true,
      newTime: !isNaN(time) ? time : jPlayer.newTime,
    });
  }
  return updateObject(jPlayer, {
    error: urlNotSetError(pause.name),
  });
};

// const setPlayHead = (jPlayer, { percent }) => {
//   const limitedPercent = limitValue(percent, 0, 100);

//   if (jPlayer.src) {
//     return updateObject(jPlayer, {
//       playHeadPercent: limitedPercent,
//     });
//   }
//   return updateObject(jPlayer, {
//     error: urlNotSetError(setPlayHead.name),
//   });
// };

// const setVolume = (jPlayer, { volume }) => updateObject(jPlayer, {
//   volume: limitValue(volume, 0, 1),
//   muted: volume <= 0,
// });

// const setMute = (jPlayer, { mute }) => updateObject(jPlayer, {
//   muted: mute,
// });

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

const updateJPlayer = (state, action, value) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    ...value,
  },
});

const reducer = (state = {}, action) => {
  const jPlayer = state[action.id];

  switch (action.type) {
    case actionNames.SET_OPTION:
      return updateJPlayer(state, action, { [action.key]: action.value });
    case actionNames.SET_MEDIA:
      return updateJPlayer(state, action, setMedia(action.media));
    case actionNames.CLEAR_MEDIA:
      return updateJPlayer(state, action, defaultStatus);
    case actionNames.PLAY:
      return play(state, action, { paused: false });
    case actionNames.PAUSE:
      return pause(jPlayer, action);
    // case actionNames.PLAY_HEAD:
    //   return setPlayHead(jPlayer, action);
    // case actionNames.VOLUME:
    //   return setVolume(jPlayer, action);
    // case actionNames.MUTE:
    //   return setMute(jPlayer, action);
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
