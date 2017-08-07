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

const resetStatus = () => ({
  ...defaultStatus,
});

const setMedia = (media) => {
  let video;
  let src;
  let nonSupported = true;
  let error;

  const formats = updateFormats(media.sources);

  formats.forEach((format) => {
    if (format.supported && nonSupported) {
      video = supportedFormats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      nonSupported = false;
    }
  });

  if (nonSupported) {
    error = noFormatSupportedError(
      `media.sources: '${Object.keys(media.sources).join(', ')}'`,
    );
  }

  return {
    ...resetStatus(),
    mediaSettings: {
      formats,
      video,
      nonSupported,
    },
    media,
    video,
    src,
    paused: true,
    error,
  };
};

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

const focus = (state, id) => {
  const newState = { ...state };

  if (newState[id].keyEnabled) {
    Object.keys(newState).forEach((key) => {
      if (key === id) {
        newState[key].focused = true;
      } else {
        newState[key].focused = false;
      }
    });
  }

  return newState;
};

const focusOnFirstKeyEnabledPlayer = (state) => {
  const firstKeyEnabledPlayer = Object.keys(state).filter(key =>
    state[key].keyEnabled,
  ).shift();

  if (state[firstKeyEnabledPlayer] !== undefined) {
    const focusedPlayer = {
      ...state[firstKeyEnabledPlayer],
      focused: true,
    };

    return {
      ...state,
      [firstKeyEnabledPlayer]: focusedPlayer,
    };
  }

  return state;
};

const setOption = (state, id, key, value) => {
  switch (key) {
    case 'media': {
      if (Object.keys(value).some(v => v)) {
        return setMedia(value);
      }
      return resetStatus();
    }
    case 'playHeadPercent':
      return setPlayHead(state[id].src, value);
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

const updateJPlayer = (state, action, value) => {
  const newState = state[action.id].keyEnabled ? focus(state, action.id) :
    focusOnFirstKeyEnabledPlayer(state);
  const jPlayer = newState[action.id];

  return {
    ...newState,
    [action.id]: {
      ...jPlayer,
      ...value,
    },
  };
};

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
    case actionNames.FOCUS:
      return focus(state, action.id);
    case actionNames.SET_OPTION:
      return updateJPlayer(state, action, setOption(state, action.id, action.key, action.value));
    default:
      return state;
  }
};

export default reducer;
