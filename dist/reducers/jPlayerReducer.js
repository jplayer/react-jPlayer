(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "screenfull", "../util/constants", "./index", "../util/index", "../containers/jPlayer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("screenfull"), require("../util/constants"), require("./index"), require("../util/index"), require("../containers/jPlayer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.screenfull, global.constants, global.index, global.index, global.jPlayer);
        global.jPlayerReducer = mod.exports;
    }
})(this, function (exports, _screenfull, _constants, _index, _index2, _jPlayer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _screenfull2 = _interopRequireDefault(_screenfull);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var clearMedia = function clearMedia(state) {
        // if(!nextProps.nativeVideoControls) {
        //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
        // }

        return (0, _index.updateOption)(state, _extends({
            seeking: false
        }, _jPlayer.statusDefaultValues));
    };

    var setMedia = function setMedia(state, action) {
        var supported = false,
            newState = (0, _index.updateOption)(state, clearMedia(newState));

        // Convert all media URLs to absolute URLs.
        var media = (0, _index2.absoluteMediaUrls)(action.media);

        for (var priority in newState.mediaSettings.formats) {
            var format = newState.mediaSettings.formats[priority];

            if (newState.mediaSettings.playableFormat[format] && (0, _index2.validString)(media[format])) {
                // Format supported in solution and url given for format.
                if (newState.mediaSettings.video) {
                    newState.video = true;
                    // this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
                    // if(this.props.nativeVideoControls) {
                    //     this.video.element().poster = validString(media.poster) ? media.poster : "";
                    // }
                } else {
                    newState.video = false;
                    // this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
                }
                if (newState.mediaSettings.playableFormat[format] && media[format]) {
                    newState.src = media[format];
                    newState.formatType = format;
                    newState.format = _defineProperty({}, format, true);
                }
                supported = true;
                break;
            }
        }
        if (supported) {
            if (!newState.nativeVideoControls) {
                // Set poster IMG if native video controls are not being used
                // Note: With IE the IMG onload event occurs immediately when cached.
                // Note: Poster hidden by default in clearMedia()
                if ((0, _index2.validString)(media.poster)) {
                    //if(posterChanged) { // Since some browsers do not generate img onload event.
                    newState.posterSrc = media.poster;
                    //	} else {
                    //	this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN);
                    //	}
                }
            }

            newState.titleText = media.title;
            newState.srcSet = true;
            newState.paused = true;
        } else {// jPlayer cannot support any formats provided in this browser
            // Send an error event
            // this._error( {
            // 	type: errors.NO_SUPPORT,
            // 	context: "{supplied:'" + this.props.supplied.join(", ") + "'}",
            // 	message: errorMessages.NO_SUPPORT,
            // 	hint: errorHints.NO_SUPPORT
            // });
        }

        return (0, _index.updateOption)(state, newState);
    };

    var play = function play(state, action) {
        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                paused: false,
                newCurrentTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            //this._urlNotSetError("play");
            return (0, _index.updateOption)(state, { paused: true });
        }
    };

    var pause = function pause(state, action) {
        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                paused: true,
                newCurrentTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            //this._urlNotSetError("pause");
        }
        return state;
    };

    var playHead = function playHead(state, action) {
        var limitedPercent = (0, _index2.limitValue)(action.percent, 0, 100);

        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                playHeadPercent: limitedPercent
            });
        } else {
            //this._urlNotSetError("playHead");
        }
        return state;
    };

    var volume = function volume(state, action) {
        return (0, _index.updateOption)(state, {
            volume: (0, _index2.limitValue)(action.volume, 0, 1)
        });
    };

    var mute = function mute(state, action) {
        return (0, _index.updateOption)(state, {
            muted: action.mute
        });
    };

    var duration = function duration(state, action) {
        return (0, _index.updateOption)(state, {
            remainingDuration: !action.remainingDuration
        });
    };

    var playbackRate = function playbackRate(state, action) {
        return (0, _index.updateOption)(state, {
            playbackRate: (0, _index2.limitValue)(action.playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
        });
    };

    var incrementLoop = function incrementLoop(state) {
        var loopIndex = state.loopOptions.indexOf(state.loop || state.loopOptions[0]);

        if (loopIndex >= state.loopOptions.length - 1) {
            loopIndex = -1;
        }
        return (0, _index.updateOption)(state, {
            loop: state.loopOptions[++loopIndex]
        });
    };

    var fullScreen = function fullScreen(state, action) {
        action.fullScreen ? _screenfull2.default.request(document.getElementById(state.jPlayerSelector)) : _screenfull2.default.exit();

        return (0, _index.updateOption)(state, {
            fullScreen: action.fullScreen
        });
    };

    exports.default = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        switch (action.type) {
            case _constants.actionTypes.jPlayer.ARRAY_ADD_UNIQUE:
                return (0, _index.addUniqueToArray)(state, action);
            case _constants.actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE:
                return (0, _index.removeFromArrayByValue)(state, action);
            case _constants.actionTypes.jPlayer.UPDATE_OPTION:
                return (0, _index.updateOption)(state, _defineProperty({}, action.key, action.value));
            case _constants.actionTypes.jPlayer.CLEAR_MEDIA:
                return clearMedia(state);
            case _constants.actionTypes.jPlayer.SET_MEDIA:
                return setMedia(state, action);
            case _constants.actionTypes.jPlayer.PLAY:
                return play(state, action);
            case _constants.actionTypes.jPlayer.PAUSE:
                return pause(state, action);
            case _constants.actionTypes.jPlayer.PLAY_HEAD:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.VOLUME:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.MUTE:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.DURATION:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.PLAYBACK_RATE:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.INCEMENT_LOOP:
                return playHead(state, action);
            case _constants.actionTypes.jPlayer.FULL_SCREEN:
                return playHead(state, action);
            default:
                return state;
        }
    };
});