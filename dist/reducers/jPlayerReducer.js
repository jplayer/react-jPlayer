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
        //     this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_CLASS, classes.HIDDEN)));
        // }

        return (0, _index.updateObject)(state, _extends({
            seeking: false
        }, _jPlayer.statusDefaultValues));
    };

    var setMedia = function setMedia(state, media) {
        var supported = false;

        state = (0, _index.updateObject)(clearMedia(state), { media: (0, _index.absoluteMediaUrls)(media) });

        for (var priority in state.mediaSettings.formats) {
            var format = state.mediaSettings.formats[priority];

            if (state.mediaSettings.supportedFormats[format] && (0, _index.validString)(media[format])) {
                // Format supported in solution and url given for format.
                if (state.mediaSettings.video) {
                    state.video = true;
                    // this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
                    // if(this.props.nativeVideoControls) {
                    //     this.video.element().poster = validString(media.poster) ? media.poster : "";
                    // }
                } else {
                    state.video = false;
                    // this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.VIDEO_PLAY_CLASS, classes.HIDDEN)));
                }
                if (state.mediaSettings.supportedFormats[format] && media[format]) {
                    state.src = media[format];
                    state.formatType = format;
                    state.format = _defineProperty({}, format, true);
                }
                supported = true;
                break;
            }
        }

        if (supported) {
            state.srcSet = true;
            state.paused = true;
        } else {
            state.error = (0, _index.noFormatSupportedError)("{supplied: '" + state.supplied.join(", ") + "'}");
        }
        return state;
    };

    var play = function play(state, action) {
        if (state.srcSet) {
            return (0, _index.updateObject)(state, {
                paused: false,
                newTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            return (0, _index.updateObject)(state, {
                error: (0, _index.urlNotSetError)(play.name)
            });
        }
    };

    var pause = function pause(state, action) {
        if (state.srcSet) {
            return (0, _index.updateObject)(state, {
                paused: true,
                newTime: !isNaN(action.time) ? action.time : state.currentTime
            });
        } else {
            return (0, _index.updateObject)(state, {
                error: (0, _index.urlNotSetError)(pause.name)
            });
        }
        return state;
    };

    var playHead = function playHead(state, action) {
        var limitedPercent = (0, _index.limitValue)(action.percent, 0, 100);

        if (state.srcSet) {
            return (0, _index.updateObject)(state, {
                playHeadPercent: limitedPercent
            });
        } else {
            return (0, _index.updateObject)(state, {
                error: (0, _index.urlNotSetError)(playHead.name)
            });
        }
        return state;
    };

    var volume = function volume(state, _volume) {
        return (0, _index.updateObject)(state, {
            volume: (0, _index.limitValue)(_volume, 0, 1)
        });
    };

    var mute = function mute(state, _mute) {
        return (0, _index.updateObject)(state, {
            muted: _mute
        });
    };

    var duration = function duration(state, action) {
        return (0, _index.updateObject)(state, {
            remainingDuration: !action.remainingDuration
        });
    };

    var playbackRate = function playbackRate(state, action) {
        return (0, _index.updateObject)(state, {
            playbackRate: (0, _index.limitValue)(action.playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
        });
    };

    var loop = function loop(state, action) {
        return (0, _index.updateObject)(state, {
            loop: action.loop
        });
    };

    var fullScreen = function fullScreen(state, _ref) {
        var fullScreen = _ref.fullScreen,
            _ref$element = _ref.element,
            element = _ref$element === undefined ? state.id : _ref$element;

        fullScreen ? _screenfull2.default.request(document.getElementById(element)) : _screenfull2.default.exit();
        return state;
    };

    var focus = function focus(state, currentId) {
        var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
            return state[key].keyEnabled;
        }).shift();

        if (state[currentId].keyEnabled) {
            Object.keys(state).forEach(function (key) {
                return state[key] = key === currentId ? (0, _index.updateObject)(state[key], { focus: true }) : (0, _index.updateObject)(state[key], { focus: false });
            });
            return state;
        } else if (state[firstKeyEnabledPlayer] !== undefined) {
            var focusedPlayer = (0, _index.updateObject)(state[firstKeyEnabledPlayer], { focus: true });
            return (0, _index.updateObject)(state, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
        }
    };

    var isInitializing = function isInitializing(actionType) {
        return !Object.keys(_constants.actionTypes.jPlayer).every(function (currentActionType) {
            return currentActionType !== actionType;
        });
    };

    var updatePlayer = function updatePlayer() {
        var jPlayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];
        var actionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : action.type;

        switch (actionType) {
            case _constants.actionTypes.jPlayer.UPDATE_OPTION:
                return (0, _index.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
            case _constants.actionTypes.jPlayer.CLEAR_MEDIA:
                return clearMedia(jPlayer);
            case _constants.actionTypes.jPlayer.SET_MEDIA:
                return setMedia(jPlayer, action.media);
            case _constants.actionTypes.jPlayer.PLAY:
                return play(jPlayer, action);
            case _constants.actionTypes.jPlayer.PAUSE:
                return pause(jPlayer, action);
            case _constants.actionTypes.jPlayer.PLAY_HEAD:
                return playHead(jPlayer, action);
            case _constants.actionTypes.jPlayer.VOLUME:
                return volume(mute(jPlayer, action.volume > 0 ? false : true), action.volume);
            case _constants.actionTypes.jPlayer.MUTE:
                return mute(jPlayer, action.mute);
            case _constants.actionTypes.jPlayer.DURATION:
                return duration(jPlayer, action);
            case _constants.actionTypes.jPlayer.PLAYBACK_RATE:
                return playbackRate(jPlayer, action);
            case _constants.actionTypes.jPlayer.LOOP:
                return loop(jPlayer, action);
            case _constants.actionTypes.jPlayer.FULL_SCREEN:
                return fullScreen(jPlayer, action);
            default:
                return jPlayer;
        }
    };

    var jPlayerReducer = function jPlayerReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        if (!isInitializing(action.type)) return state;

        Object.keys(state).forEach(function (key) {
            var jPlayer = state[key];

            jPlayer.global.forEach(function (actionType) {
                if (key !== action.id && action.type === actionType) {
                    state = (0, _index.updateObject)(state, _defineProperty({}, key, updatePlayer(state[key], action, actionType)));
                }
            });
        });

        switch (action.type) {
            case _constants.actionTypes.jPlayer.FOCUS:
                return (0, _index.updateObject)(state, focus(state, action.id));
            default:
                state = (0, _index.updateObject)(state, _defineProperty({}, action.id, updatePlayer(state[action.id], action)));

                return jPlayerReducer(state, {
                    type: _constants.actionTypes.jPlayer.FOCUS,
                    id: action.id
                });
        }
    };

    exports.default = jPlayerReducer;
});