(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "lodash.merge", "lodash/maxBy", "../store", "react-redux", "redux", "../actions/jPlaylistActions", "../util/index", "../util/constants", "../components/playlist", "../components/playlistItem", "./jPlayer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("lodash.merge"), require("lodash/maxBy"), require("../store"), require("react-redux"), require("redux"), require("../actions/jPlaylistActions"), require("../util/index"), require("../util/constants"), require("../components/playlist"), require("../components/playlistItem"), require("./jPlayer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.lodash, global.maxBy, global.store, global.reactRedux, global.redux, global.jPlaylistActions, global.index, global.constants, global.playlist, global.playlistItem, global.jPlayer);
        global.jPlaylist = mod.exports;
    }
})(this, function (exports, _react, _lodash, _maxBy, _store, _reactRedux, _redux, _jPlaylistActions, _index, _constants, _playlist, _playlistItem, _jPlayer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _maxBy2 = _interopRequireDefault(_maxBy);

    var _store2 = _interopRequireDefault(_store);

    var actions = _interopRequireWildcard(_jPlaylistActions);

    var util = _interopRequireWildcard(_index);

    var constants = _interopRequireWildcard(_constants);

    var _playlist2 = _interopRequireDefault(_playlist);

    var _playlistItem2 = _interopRequireDefault(_playlistItem);

    var _jPlayer2 = _interopRequireDefault(_jPlayer);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return _extends({}, state.jPlaylist, {
            html: state.jPlayer.html,
            fullScreen: state.jPlayer.fullScreen,
            autoPlay: state.jPlayer.autoPlay,
            loop: state.jPlayer.loop,
            paused: state.jPlayer.paused,
            autoBlur: state.jPlayer.autoBlur,
            controls: state.jPlayer.controls
        });
    };
    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return (0, _redux.bindActionCreators)(actions, dispatch);
    };

    exports.default = function (WrappedComponent) {
        return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(function (_React$PureComponent) {
            _inherits(JPlaylist, _React$PureComponent);

            function JPlaylist(props, context) {
                _classCallCheck(this, JPlaylist);

                var _this = _possibleConstructorReturn(this, (JPlaylist.__proto__ || Object.getPrototypeOf(JPlaylist)).call(this, props, context));

                _this.getChildContext = function () {
                    return {
                        play: _this.play,
                        add: _this.add,
                        remove: _this.remove,
                        select: _this.select,
                        next: _this.next,
                        previous: _this.previous,
                        shuffle: _this.shuffle,
                        blur: _this.blur
                    };
                };

                _this._addFreeMediaLinks = function (media) {
                    if (!media.free) return;

                    var firstMediaLinkAdded = true;

                    media.freeMediaLinks = [];

                    for (var property in media) {
                        // Check the property is a media format
                        if (constants.formats[property]) {
                            var value = media[property];

                            firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(", ");
                            media.freeMediaLinks.push(_react2.default.createElement(
                                "a",
                                { key: _this.freeMediaLinkIndex++, className: _this.props.freeItemClass, href: value, tabIndex: "-1" },
                                property
                            ));
                        }
                    }
                };

                _this._initPlaylist = function (playlist) {
                    _this.props.updateOption("current", 0);
                    _this.props.updateOption("shuffled", false);
                    _this.original = (0, _lodash2.default)([], playlist); // Copy the Array of Objects

                    for (var i = 0; i < _this.original.length; i++) {
                        _this.original[i].key = i;
                        _this._addFreeMediaLinks(_this.original[i]);
                    }

                    _this.props.updateOption("playlist", _this.original);
                };

                _this.setPlaylist = function (playlist) {
                    return _this._initPlaylist(playlist);
                };

                _this.add = function (media, playNow) {
                    _this._addFreeMediaLinks(media);
                    media.key = (0, _maxBy2.default)(_this.props.playlist, "key").key + 1;

                    _this.original.push(media);
                    _this.props.addUniqueToArray(constants.keys.PLAYLIST_CLASS, media);

                    if (playNow) {
                        _this.play(_this.props.playlist.length - 1);
                    } else {
                        if (_this.original.length === 1) {
                            _this.select(0);
                        }
                    }
                };

                _this.remove = function (index) {
                    if (index === undefined) {
                        _this._initPlaylist([]);
                        _this.context.clearMedia();
                        return true;
                    } else {
                        var playlist = (0, _lodash2.default)([], [].concat(_toConsumableArray(_this.props.playlist)));
                        playlist[index].isRemoving = true;

                        _this.props.updateOption("playlist", playlist);
                    }
                    _this.setState({ removing: true });
                };

                _this.select = function (index) {
                    index = index < 0 ? _this.original.length + index : index; // Negative index relates to end of array.
                    if (0 <= index && index < _this.props.playlist.length) {
                        _this.props.updateOption("current", index);
                        _this.context.setMedia(_this.props.playlist[index]);
                    } else {
                        _this.props.updateOption("current", 0);
                    }
                };

                _this.play = function (index) {
                    index = index < 0 ? _this.original.length + index : index; // Negative index relates to end of array.
                    if (0 <= index && index < _this.props.playlist.length) {
                        if (_this.props.playlist.length) {
                            _this.select(index, true);
                            _this.context.play();
                        }
                    } else if (index === undefined) {
                        _this.context.play();
                    }
                };

                _this.next = function () {
                    var index = _this.props.current + 1 < _this.props.playlist.length ? _this.props.current + 1 : 0;

                    if (_this.props.loop === "loop") {
                        _this.play(_this.props.current);
                    }
                    if (_this.props.loop === "loop-playlist") {
                        // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
                        if (index === 0 && _this.props.shuffled && _this.props.shuffleOnLoop && _this.props.playlist.length > 1) {
                            _this.shuffle(true, true); // playNow
                        } else {
                            _this.play(index);
                        }
                    } else {
                        // The index will be zero if it just looped round
                        if (index > 0) {
                            _this.play(index);
                        }
                    }
                };

                _this.previous = function () {
                    var index = _this.props.current - 1 >= 0 ? _this.props.current - 1 : _this.props.playlist.length - 1;

                    if (_this.props.loop === "loop-playlist" && _this.props.loopOnPrevious || index < _this.props.playlist.length - 1) {
                        _this.play(index);
                    }
                };

                _this.shuffle = function (shuffled, playNow) {
                    if (shuffled === undefined) {
                        shuffled = !_this.props.shuffled;
                    }

                    _this.props.updateOption("playNow", playNow);
                    _this.props.updateOption("shuffled", shuffled);
                    _this.setState({ shuffling: true });
                };

                _this._removeAnimationCallback = function (index) {
                    if (_this.props.shuffled) {
                        var item = _this.props.playlist[index];
                        for (var i = 0; i < _this.original.length; i++) {
                            if (_this.original[i].key === item.key) {
                                _this.original.splice(i, 1);
                                break;
                            }
                        }
                    } else {
                        _this.original.splice(index, 1);
                    }

                    _this.props.removeFromArrayByIndex(constants.keys.PLAYLIST, index);

                    if (_this.original.length) {
                        if (index === _this.props.current) {
                            // To cope when last element being selected when it was removed
                            _this.props.updateOption("current", index < _this.original.length ? _this.props.current : _this.original.length - 1).then(function () {
                                return _this.select(_this.props.current);
                            });
                        } else if (index < _this.props.current) {
                            _this.props.updateOption("current", _this.props.current--);
                        }
                    } else {
                        _this.props.updateOption("current", 0);
                        _this.props.updateOption("shuffled", false);
                        _this.context.clearMedia();
                    }

                    _this.setState({ removing: false });
                };

                _this._shuffleAnimationCallback = function () {
                    if (_this.state.shuffling) {
                        _this.props.shuffled ? _this.props.updateOption("playlist", [].concat(_toConsumableArray(_this.props.playlist)).sort(function () {
                            return 0.5 - Math.random();
                        })) : _this.props.updateOption("playlist", _this.original);
                        _this.setState({ shuffling: false });
                    }
                };

                _this.blur = function (that) {
                    if (_this.props.autoBlur) {
                        that.blur();
                    }
                };

                _this._autoPlay = function (nextProps) {
                    if (nextProps.playlist !== _this.props.playlist && !_this.state.shuffling) {
                        nextProps.autoPlay ? _this.play(nextProps.current) : _this.select(nextProps.current);
                    }
                };

                _this.state = {
                    current: 0
                };

                // WrappedComponent = JPlayer(WrappedComponent, <PlaylistControls {...jPlaylistOptions.controls} _onShuffleClick={this._onShuffleClick} _onPreviousClick={this._onPreviousClick} 
                // _onNextClick={this._onNextClick} html={this.props.html} />)

                // this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
                // this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

                _this.props.updateOption("onEnded", function () {
                    _this.next();
                    // this._trigger(this.props.onEnded)
                });

                _this.props.updateOption("onPlay", function () {
                    //actions.updateOthersOption(this.props.jPlayerSelector, true, "paused");
                    // this._trigger(this.props.onPlay);
                });

                _this.props.updateOption("onResize", function () {
                    var method = _this.props.fullScreen ? _this.props.removeFromArrayByValue : _this.props.addUniqueToArray;

                    _this.setState(function (state) {
                        return method(state.detailsClass, constants.classNames.HIDDEN);
                    });
                    // this._trigger(this.props.onResize);
                });

                _this.props.updateOption("keyBindings", (0, _lodash2.default)({
                    next: {
                        key: 221, // ]
                        fn: function fn() {
                            return _this.next();
                        }
                    },
                    previous: {
                        key: 219, // [
                        fn: function fn() {
                            return _this.previous();
                        }
                    },
                    shuffle: {
                        key: 83, // s
                        fn: function fn() {
                            return _this.shuffle();
                        }
                    }
                }, _this.props.keyBindings));

                _this.freeMediaLinkIndex = 0;

                // Put the title in its initial display state
                if (!_this.props.fullScreen) {
                    _this.setState(function (state) {
                        return addUniqueToArray(state.detailsClass, constants.classNames.HIDDEN);
                    });
                }
                return _this;
            }

            _createClass(JPlaylist, [{
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps, prevState) {
                    if (!this.state.shuffling && this.state.shuffling !== prevState.shuffling) {
                        this.props.playNow || !this.props.paused ? this.play(0) : this.select(0);
                    }
                }
            }, {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                    this._autoPlay(nextProps);
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.setPlaylist(this.props.playlist);
                }
            }, {
                key: "render",
                value: function render() {
                    var MediaAnimationConfig = this.state.removing ? this.props.removeAnimation : this.props.addAnimation;

                    return _react2.default.createElement(
                        WrappedComponent,
                        _extends({}, this.props, this.keyBindings, this.event),
                        _react2.default.createElement(
                            "div",
                            { className: "jp-playlist" },
                            _react2.default.createElement(
                                _playlist2.default,
                                { shuffling: this.state.shuffling, config: this.props.shuffleAnimation, onRest: this._shuffleAnimationCallback },
                                _react2.default.createElement(_playlistItem2.default, { medias: this.props.playlist, current: this.props.current, config: MediaAnimationConfig, onRest: this._removeAnimationCallback,
                                    removeItemClass: this.props.removeItemClass, freeGroupClass: this.props.freeGroupClass, itemClass: this.props.itemClass, enableRemoveControls: this.props.enableRemoveControls,
                                    remove: this.remove, blur: this.blur, play: this.play, mergeOptions: this.mergeOptions })
                            )
                        ),
                        this.props.children
                    );
                }
            }], [{
                key: "defaultProps",
                get: function get() {
                    return {
                        playlist: [],
                        shuffleOnLoop: true,
                        itemClass: "jp-playlist-item",
                        freeItemClass: "jp-playlist-item-free",
                        removeItemClass: "jp-playlist-item-remove",
                        freeGroupClass: "jp-free-media"
                    };
                }
            }, {
                key: "propTypes",
                get: function get() {
                    return {
                        updateOptions: _react2.default.PropTypes.func.isRequired,
                        playlist: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
                            title: _react2.default.PropTypes.string,
                            artist: _react2.default.PropTypes.string,
                            mp3: _react2.default.PropTypes.string,
                            poster: _react2.default.PropTypes.string,
                            free: _react2.default.PropTypes.bool
                        })),
                        enableRemoveControls: _react2.default.PropTypes.bool,
                        shuffleOnLoop: _react2.default.PropTypes.bool,
                        itemClass: _react2.default.PropTypes.string,
                        freeItemClass: _react2.default.PropTypes.string,
                        removeItemClass: _react2.default.PropTypes.string,
                        freeGroupClass: _react2.default.PropTypes.string
                    };
                }
            }, {
                key: "contextTypes",
                get: function get() {
                    return {
                        setMedia: _react2.default.PropTypes.func,
                        play: _react2.default.PropTypes.func
                    };
                }
            }, {
                key: "childContextTypes",
                get: function get() {
                    return {
                        play: _react2.default.PropTypes.func,
                        add: _react2.default.PropTypes.func,
                        remove: _react2.default.PropTypes.func,
                        select: _react2.default.PropTypes.func,
                        next: _react2.default.PropTypes.func,
                        previous: _react2.default.PropTypes.func,
                        shuffle: _react2.default.PropTypes.func,
                        blur: _react2.default.PropTypes.func
                    };
                }
            }]);

            return JPlaylist;
        }(_react2.default.PureComponent));
    };
});