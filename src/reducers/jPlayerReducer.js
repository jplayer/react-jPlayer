import screenfull from "screenfull";

import {actionTypes} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue, updateOption} from "./index";
import {classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes, errors, errorMessages, errorHints} from "../util/constants";
import {testCanPlayType, absoluteMediaUrls, validString, limitValue} from "../util/index";
import {statusDefaultValues} from "../containers/jPlayer";

const clearMedia = (state) => {
    // if(!nextProps.nativeVideoControls) {
    //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
    // }

    return updateOption(state, {
        seeking: false,
        ...statusDefaultValues
    });
}

const setMedia = (state, action) => {
    let	supported = false,
        newState = updateOption(state, clearMedia(newState));

    // Convert all media URLs to absolute URLs.
    const media = absoluteMediaUrls(action.media);

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
    } else { // jPlayer cannot support any formats provided in this browser
        // Send an error event
        // this._error( {
        // 	type: errors.NO_SUPPORT,
        // 	context: "{supplied:'" + this.props.supplied.join(", ") + "'}",
        // 	message: errorMessages.NO_SUPPORT,
        // 	hint: errorHints.NO_SUPPORT
        // });
    }
    
    return updateOption(state, newState);
}

const play = (state, action) => {
    if(state.srcSet) {
        return updateOption(state, {
            paused: false,
            newCurrentTime: !isNaN(action.time) ? action.time : state.currentTime 
        });
    } else {
        //this._urlNotSetError("play");
        return updateOption(state, {paused: true});
    }
}

const pause = (state, action) => {
    if(state.srcSet) {
        return updateOption(state, {
            paused: true,
            newCurrentTime: !isNaN(action.time) ? action.time : state.currentTime 
        });
    } else {
        //this._urlNotSetError("pause");
    }
    return state;
}

const playHead = (state, action) => {
    const limitedPercent = limitValue(action.percent, 0, 100);

    if(state.srcSet) {
        return updateOption(state, {
            playHeadPercent: limitedPercent
        });
    } else {
        //this._urlNotSetError("playHead");
    }
    return state;
}

const volume = (state, action) => updateOption(state, {
    volume: limitValue(action.volume, 0, 1)
});

const mute = (state, action) => updateOption(state, {
    muted: action.mute
});

const duration = (state, action) => updateOption(state, {
    remainingDuration: !action.remainingDuration
});

const playbackRate = (state, action) => updateOption(state, {
    playbackRate: limitValue(action.playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
});

const loop = (state, action) => updateOption(state, {
    loop: action.loop
});

const fullScreen = (state, action) => {
    action.fullScreen ? screenfull.request(document.getElementById(state.jPlayerSelector)) : screenfull.exit();

    return state;
}

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.jPlayer.ARRAY_ADD_UNIQUE:
            return addUniqueToArray(state, action);
        case actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE:
            return removeFromArrayByValue(state, action);
        case actionTypes.jPlayer.UPDATE_OPTION:
            return updateOption(state, {[action.key]: action.value});
        case actionTypes.jPlayer.CLEAR_MEDIA:
            return clearMedia(state);         
        case actionTypes.jPlayer.SET_MEDIA: 
            return setMedia(state, action);
        case actionTypes.jPlayer.PLAY: 
            return play(state, action);
        case actionTypes.jPlayer.PAUSE: 
            return pause(state, action);
        case actionTypes.jPlayer.PLAY_HEAD:
            return playHead(state, action);
        case actionTypes.jPlayer.VOLUME:
            return volume(state, action);
        case actionTypes.jPlayer.MUTE:
            return mute(state, action);
        case actionTypes.jPlayer.DURATION:
            return duration(state, action);
        case actionTypes.jPlayer.PLAYBACK_RATE:
            return playbackRate(state, action);
        case actionTypes.jPlayer.LOOP:
            return loop(state, action);
        case actionTypes.jPlayer.FULL_SCREEN:
            return fullScreen(state, action);
        default:
            return state;
    }
}