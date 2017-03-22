import includes from 'lodash.includes';

import { actionNames, formats, defaultStatus, internalStatus,
   defaultOptions } from '../util/constants';
import { limitValue, updateObject, urlNotSetError, noFormatSupportedError,
  InvalidGlobalMethodException } from '../util/index';

const updateFormats = (state, media) => {
  const newMediaSettings = { ...state.mediaSettings };
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

  return updateObject(state, {
    mediaSettings: newMediaSettings,
  });
};

const clearMedia = state => updateObject(state, {
  ...defaultStatus,
  media: defaultOptions.media,
});

const setMedia = (state, { media = { sources: [] } }) => {
  let newState = {
    ...clearMedia(state),
    mediaSettings: internalStatus.mediaSettings,
  };

  newState = updateFormats(newState, media);

  newState.mediaSettings.formats.forEach((format) => {
    if (format.supported && !newState.mediaSettings.foundSupported) {
      newState.mediaSettings.video = formats[format.supplied].MEDIA === 'video';
      newState.src = media.sources[format.supplied];
      newState.paused = true;
      newState.mediaSettings.foundSupported = true;
    }
  });

  if (!newState.mediaSettings.foundSupported) {
    newState.error = noFormatSupportedError(
      `{ media.sources: '${Object.keys(media.sources).join(', ')}' }`,
    );
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
  muted: volume <= 0,
});

const setMute = (state, { mute }) => updateObject(state, {
  muted: mute,
});

const focus = (state, { id }) => {
  const newState = { ...state };
  const firstKeyEnabledPlayer = Object.keys(state).filter(key => newState[key].keyEnabled).shift();

  if (newState[id].keyEnabled) {
    Object.keys(state).forEach((key) => {
      if (key === id) {
        newState[key] = updateObject(newState[key], { focused: true });
      } else {
        newState[key] = updateObject(newState[key], { focused: false });
      }
    });
  } else if (newState[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = updateObject(newState[firstKeyEnabledPlayer], { focused: true });
    return updateObject(newState, { [firstKeyEnabledPlayer]: focusedPlayer });
  }
  return newState;
};

const updatePlayer = (jPlayer, action) => {
  switch (action.type) {
    case actionNames.SET_OPTION:
      return updateObject(jPlayer, { [action.key]: action.value });
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

const actionTypeValid = actionType =>
  Object.keys(actionNames).some(currentActionType => currentActionType === actionType);

const setGlobalOptions = (state, action) => {
  let newState = { ...state };

  Object.keys(newState).forEach((key) => {
    const { global = [] } = newState[key];

    global.forEach((actionType) => {
      if (!actionTypeValid(actionType)) {
        throw new InvalidGlobalMethodException(actionType);
      }
    });

    if (key !== action.id && includes(global, action.type)) {
      newState = updateObject(newState, {
        [key]: updatePlayer(newState[key], action, action.type),
      });
    }
  });
  return newState;
};

const jPlayerReducer = (state, action) => {
  let newState = { ...state };
  const jPlayer = updatePlayer(newState[action.id], action);

  if (jPlayer !== null) {
    newState = setGlobalOptions(newState, action);
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
