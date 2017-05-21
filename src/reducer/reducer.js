import shortid from 'shortid';
import { updateObject, limitValue } from 'react-jplayer-utils';

import { actionNames, formats, defaultStatus, defaultOptions } from '../util/constants';
import urlNotSetError from '../util/errorHandlers/urlNotSetError';
import noFormatSupportedError from '../util/errorHandlers/noFormatSupportedError';

const updateFormats = (jPlayer, media) => {
  const newMediaSettings = { ...jPlayer.mediaSettings };
  const newFormats = [];

  Object.keys(media.sources).forEach((supplied) => {
    let canPlayType;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(formats[supplied].MEDIA)
        .canPlayType(formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    newFormats.push({
      supplied,
      supported: canPlayType,
    });
  });

  newMediaSettings.formats = newFormats;

  return updateObject(jPlayer, {
    mediaSettings: newMediaSettings,
  });
};

const clearMedia = jPlayer => updateObject(jPlayer, {
  ...defaultStatus,
  media: defaultOptions.media,
});

const setMedia = (jPlayer, { media = { sources: [] } }) => {
  let newJPlayer = {
    ...clearMedia(jPlayer),
    mediaSettings: defaultStatus.mediaSettings,
  };

  newJPlayer = updateFormats(newJPlayer, media);

  newJPlayer.mediaSettings.formats.forEach((format) => {
    if (format.supported && !newJPlayer.mediaSettings.foundSupported) {
      newJPlayer.mediaSettings.video = formats[format.supplied].MEDIA === 'video';
      newJPlayer.src = media.sources[format.supplied];
      newJPlayer.paused = true;
      newJPlayer.mediaSettings.foundSupported = true;
    }
  });

  if (!newJPlayer.mediaSettings.foundSupported) {
    newJPlayer.error = noFormatSupportedError(
      `{ media.sources: '${Object.keys(media.sources).join(', ')}' }`,
    );
  }
  newJPlayer.media = updateObject(defaultOptions.media, {
    ...media,
    id: shortid.generate(),
  });

  return newJPlayer;
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

const setPlayHead = (jPlayer, { percent }) => {
  const limitedPercent = limitValue(percent, 0, 100);

  if (jPlayer.src) {
    return updateObject(jPlayer, {
      playHeadPercent: limitedPercent,
    });
  }
  return updateObject(jPlayer, {
    error: urlNotSetError(setPlayHead.name),
  });
};

const setVolume = (jPlayer, { volume }) => updateObject(jPlayer, {
  volume: limitValue(volume, 0, 1),
  muted: volume <= 0,
});

const setMute = (jPlayer, { mute }) => updateObject(jPlayer, {
  muted: mute,
});

const focus = (jPlayer, { id }) => {
  const newJPlayer = { ...jPlayer };
  const firstKeyEnabledPlayer = Object.keys(newJPlayer).filter(key =>
    newJPlayer[key].keyEnabled,
  ).shift();

  if (newJPlayer[id].keyEnabled) {
    Object.keys(newJPlayer).forEach((key) => {
      if (key === id) {
        newJPlayer[key] = updateObject(newJPlayer[key], { focused: true });
      } else {
        newJPlayer[key] = updateObject(newJPlayer[key], { focused: false });
      }
    });
  } else if (newJPlayer[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = updateObject(newJPlayer[firstKeyEnabledPlayer], { focused: true });
    return updateObject(newJPlayer, { [firstKeyEnabledPlayer]: focusedPlayer });
  }
  return newJPlayer;
};

const updatePlayer = (jPlayer, action) => {
  switch (action.type) {
    case actionNames.SET_OPTION:
      switch (action.key) {
        case 'media': {
          const media = action.value;
          if (Object.keys(media).some(v => v)) {
            return setMedia(jPlayer, { media });
          }
          return clearMedia(jPlayer);
        }
        case 'playHeadPercent':
          return setPlayHead(jPlayer, { percent: action.value });
        case 'volume':
          return setVolume(jPlayer, { volume: action.value });
        case 'muted':
          return setMute(jPlayer, { mute: action.value });
        default:
          return updateObject(jPlayer, { [action.key]: action.value });
      }
    case actionNames.SET_MEDIA:
      return setMedia(jPlayer, action);
    case actionNames.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case actionNames.PLAY:
      return play(jPlayer, action);
    case actionNames.PAUSE:
      return pause(jPlayer, action);
    case actionNames.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case actionNames.VOLUME:
      return setVolume(jPlayer, action);
    case actionNames.MUTE:
      return setMute(jPlayer, action);
    default:
      return null;
  }
};

const jPlayerReducer = (state, action) => {
  let newState = { ...state };
  const jPlayer = updatePlayer(newState[action.id], action);

  if (jPlayer !== null) {
    newState = updateObject(newState, {
      [action.id]: jPlayer,
    });

    return jPlayerReducer(newState, {
      type: actionNames.FOCUS,
      id: action.id,
    });
  }

  if (action.type === actionNames.FOCUS) {
    return updateObject(newState, focus(newState, action));
  }
  return newState;
};

export default jPlayerReducer;
