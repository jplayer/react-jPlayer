(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "screenfull", "lodash/get", "lodash/set", "../util/constants", "../util/index", "../containers/jPlayer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("screenfull"), require("lodash/get"), require("lodash/set"), require("../util/constants"), require("../util/index"), require("../containers/jPlayer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.screenfull, global.get, global.set, global.constants, global.index, global.jPlayer);
        global.jPlayerReducer = mod.exports;
    }
})(this, function (exports, _screenfull, _get, _set, _constants, _index, _jPlayer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _screenfull2 = _interopRequireDefault(_screenfull);

    var _get2 = _interopRequireDefault(_get);

    var _set2 = _interopRequireDefault(_set);

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
        var media = (0, _index.absoluteMediaUrls)(action.media);

        for (var priority in newState.mediaSettings.formats) {
            var format = newState.mediaSettings.formats[priority];

            if (newState.mediaSettings.playableFormat[format] && (0, _index.validString)(media[format])) {
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
                    newState.originalSrc = action.media[format];
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
                if ((0, _index.validString)(media.poster)) {
                    newState.posterSrc = media.poster;
                }
            }

            newState.titleText = media.title;
            newState.srcSet = true;
            newState.paused = true;
        } else {
            newState.error = (0, _index.noFormatSupportedError)("{supplied: '" + newState.supplied.join(", ") + "'}");
        }

        return (0, _index.updateOption)(state, newState);
    };

    var play = function play(state, action) {
        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                paused: false,
                newTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            return (0, _index.updateOption)(state, {
                error: (0, _index.urlNotSetError)(play.name)
            });
        }
    };

    var pause = function pause(state, action) {
        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                paused: true,
                newTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            return (0, _index.updateOption)(state, {
                error: (0, _index.urlNotSetError)(pause.name)
            });
        }
        return state;
    };

    var playHead = function playHead(state, action) {
        var limitedPercent = (0, _index.limitValue)(action.percent, 0, 100);

        if (state.srcSet) {
            return (0, _index.updateOption)(state, {
                playHeadPercent: limitedPercent
            });
        } else {
            return (0, _index.updateOption)(state, {
                error: (0, _index.urlNotSetError)(playHead.name)
            });
        }
        return state;
    };

    var volume = function volume(state, action) {
        return (0, _index.updateOption)(state, {
            volume: (0, _index.limitValue)(action.volume, 0, 1)
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
            playbackRate: (0, _index.limitValue)(action.playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
        });
    };

    var loop = function loop(state, action) {
        return (0, _index.updateOption)(state, {
            loop: action.loop
        });
    };

    var fullScreen = function fullScreen(state, _ref) {
        var fullScreen = _ref.fullScreen,
            _ref$element = _ref.element,
            element = _ref$element === undefined ? state.cssSelectorAncestor : _ref$element;

        fullScreen ? _screenfull2.default.request(document.getElementById(element)) : _screenfull2.default.exit();
        return state;
    };

    exports.default = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        switch (action.type) {
            case _constants.actionTypes.jPlayer.ARRAY_ADD_UNIQUE:
                return (0, _index.updateObjectByKey)(state, action.key, (0, _index.addUniqueToArray)((0, _get2.default)(state, action.key), action.value));
            case _constants.actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE:
                return (0, _index.updateObjectByKey)(state, action.key, (0, _index.removeFromArrayByValue)((0, _get2.default)(state, action.key), action.value));
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
                return volume(state, action);
            case _constants.actionTypes.jPlayer.MUTE:
                return mute(state, action);
            case _constants.actionTypes.jPlayer.DURATION:
                return duration(state, action);
            case _constants.actionTypes.jPlayer.PLAYBACK_RATE:
                return playbackRate(state, action);
            case _constants.actionTypes.jPlayer.LOOP:
                return loop(state, action);
            case _constants.actionTypes.jPlayer.FULL_SCREEN:
                return fullScreen(state, action);
            default:
                return state;
        }
    };
});