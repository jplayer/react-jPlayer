import screenfull from "screenfull";
import get from "lodash/get";
import set from "lodash/set";

import {actionTypes, classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes} from "../util/constants";
import {testCanPlayType, absoluteMediaUrls, validString, limitValue, updateObject, urlNotSetError, noFormatSupportedError} from "../util/index";
import {statusDefaultValues} from "../containers/jPlayer";

const clearMedia = (state) => {
    // if(!nextProps.nativeVideoControls) {
    //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
    // }

    return updateObject(state, {
        seeking: false,
        ...statusDefaultValues
    });
}

const setMedia = (state, media) => {
    let	supported = false,
        newState = clearMedia(state),
        originalSrc = media.src;
    
    // Convert all media URLs to absolute URLs.
    media = absoluteMediaUrls(media);

    for (var priority in newState.mediaSettings.formats) {
        const format = newState.mediaSettings.formats[priority];

        if(newState.mediaSettings.playableFormat[format] && validString(media[format])) { // Format supported in solution and url given for format.
            if(newState.mediaSettings.video) {
                newState.video = true;
            // this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
            // if(this.props.nativeVideoControls) {
                //     this.video.element().poster = validString(media.poster) ? media.poster : "";
                // }
            } else {
                newState.video = false;
            // this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
            }
            if(newState.mediaSettings.playableFormat[format] && media[format]) {
                newState.originalSrc =originalSrc; 
                newState.src = media[format];
                newState.formatType = format;
                newState.format = {[format]: true};
            }
            supported = true;
            break;
        }
    }

    if(supported) {
        if(!(newState.nativeVideoControls)) {
            if(validString(media.poster)) {
                newState.posterSrc = media.poster;
            }
        }

        newState.titleText = media.title;          
        newState.srcSet = true;
        newState.paused = true;
    } else {
        newState.error = noFormatSupportedError(`{supplied: '${newState.supplied.join(", ")}'}`);
    }
    
    return updateObject(state, newState);
}

const play = (state, action) => {
    if(state.srcSet) {
        return updateObject(state, {
            paused: false,
            newTime: !isNaN(action.time) ? action.time : state.currentTime 
        });
    } else {
        return updateObject(state, {
            error: urlNotSetError(play.name)
        });
    }
}

const pause = (state, action) => {
    if(state.srcSet) {
        return updateObject(state, {
            paused: true,
            newTime: !isNaN(action.time) ? action.time : state.currentTime 
        });
    } else {
        return updateObject(state, {
            error: urlNotSetError(pause.name)
        });
    }
    return state;
}

const playHead = (state, action) => {
    const limitedPercent = limitValue(action.percent, 0, 100);

    if(state.srcSet) {
        return updateObject(state, {
            playHeadPercent: limitedPercent
        });
    } else {
        return updateObject(state, {
            error: urlNotSetError(playHead.name)
        });
    }
    return state;
}

const volume = (state, action) => updateObject(state, {
    volume: limitValue(action.volume, 0, 1)
});

const mute = (state, action) => updateObject(state, {
    muted: action.mute
});

const duration = (state, action) => updateObject(state, {
    remainingDuration: !action.remainingDuration
});

const playbackRate = (state, action) => updateObject(state, {
    playbackRate: limitValue(action.playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
});

const loop = (state, action) => updateObject(state, {
    loop: action.loop
});

const fullScreen = (state, {fullScreen, element = state.id}) => {
    fullScreen ? screenfull.request(document.getElementById(element)) : screenfull.exit();
    return state;
}

const focus = (state, currentId) => {
    let newState = {...state};
    const firstKeyEnabledPlayer = Object.keys(state).filter(key => state[key].keyEnabled).shift();

    if (newState[currentId].keyEnabled) {
        Object.keys(newState).forEach(key => newState[key].focus = false);
        newState[currentId].focus = true;
    }
    else {
        newState[firstKeyEnabledPlayer].focus = true;
    }

    return updateObject(state, newState);
}

export default (state={}, action) => {
    let currentPlayer = {...state[action.id]};

    switch (action.type) {
        case actionTypes.jPlayer.UPDATE_OPTION:
            currentPlayer = updateObject(currentPlayer, {[action.key]: action.value});
            break;
        case actionTypes.jPlayer.CLEAR_MEDIA:
            currentPlayer = clearMedia(currentPlayer);
            break;
        case actionTypes.jPlayer.SET_MEDIA:
            currentPlayer = setMedia(currentPlayer, action.media);
            break;
        case actionTypes.jPlayer.PLAY: 
            currentPlayer = play(currentPlayer, action);
            break;
        case actionTypes.jPlayer.PAUSE:
            currentPlayer = pause(currentPlayer, action);
            break;
        case actionTypes.jPlayer.PLAY_HEAD:
            currentPlayer = playHead(currentPlayer, action);
            break;
        case actionTypes.jPlayer.VOLUME:
            currentPlayer = volume(currentPlayer, action);
            break;
        case actionTypes.jPlayer.MUTE:
            currentPlayer = mute(currentPlayer, action);
            break;
        case actionTypes.jPlayer.DURATION:
            currentPlayer = duration(currentPlayer, action);
            break;
        case actionTypes.jPlayer.PLAYBACK_RATE:
            currentPlayer = playbackRate(currentPlayer, action);
            break;
        case actionTypes.jPlayer.LOOP:
            currentPlayer = loop(currentPlayer, action);
            break;
        case actionTypes.jPlayer.FULL_SCREEN: 
            currentPlayer = fullScreen(currentPlayer, action);
            break;
        case actionTypes.jPlayer.FOCUS: 
            return updateObject(state, focus(state, action.id));
        default:
            return state;
    }

    state = updateObject(state, {
        [action.id]: currentPlayer 
    });

    return updateObject(state, focus(state, action.id));
}