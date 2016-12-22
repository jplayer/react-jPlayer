import {actionTypes} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue, updateOption} from "./index";
import {classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes, errors, errorMessages, errorHints} from "../util/constants";
import {testCanPlayType, absoluteMediaUrls, validString} from "../util/index";
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
        video = state.video,
        src = state.src,
        formatType = state.formatType,
        newFormat = state.format,
        posterSrc = state.posterSrc,
        titleText = state.titleText,
        srcSet = state.srcSet,
        paused = state.paused;
    
    const clearedMediaValues = clearMedia(state);

    // Convert all media URLs to absolute URLs.
    const media = absoluteMediaUrls(action.media);

    for (var priority in state.mediaSettings.formats) {
        const format = state.mediaSettings.formats[priority];

        if(state.mediaSettings.playableFormat[format] && validString(media[format])) { // Format supported in solution and url given for format.
            if(state.mediaSettings.video) {
                video = true;
            // this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
            // if(this.props.nativeVideoControls) {
                //     this.video.element().poster = validString(media.poster) ? media.poster : "";
                // }
            } else {
                video = false;
            // this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
            }
            if(state.mediaSettings.playableFormat[format] && media[format]) {
                src = media[format];
                formatType: format;
                newFormat = {[format]: true};
            }
            supported = true;
            break;
        }
    }
    if(supported) {
        if(!(state.nativeVideoControls)) {
            // Set poster IMG if native video controls are not being used
            // Note: With IE the IMG onload event occurs immediately when cached.
            // Note: Poster hidden by default in clearMedia()
            if(validString(media.poster)) {
                //if(posterChanged) { // Since some browsers do not generate img onload event.
                posterSrc = media.poster;
            //	} else {
                //	this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN);
            //	}
            }
        }

        titleText = media.title;          
        srcSet = true;
        paused = true;
    } else { // jPlayer cannot support any formats provided in this browser
        // Send an error event
        // this._error( {
        // 	type: errors.NO_SUPPORT,
        // 	context: "{supplied:'" + this.props.supplied.join(", ") + "'}",
        // 	message: errorMessages.NO_SUPPORT,
        // 	hint: errorHints.NO_SUPPORT
        // });
    }

    return updateOption(state, {
        video: video,
        src: src,
        formatType: formatType,
        format: newFormat,
        posterSrc: posterSrc,
        titleText: titleText,
        srcSet: srcSet,
        paused: paused
    });
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
            return clearMedia(state, action);         
        case actionTypes.jPlayer.SET_MEDIA: 
            return setMedia(state, action);
        default:
            return state;
    }
}