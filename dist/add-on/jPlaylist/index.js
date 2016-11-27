(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-motion", "lodash.merge", "lodash/maxBy", "../../jPlayer/index", "../../store", "./actions", "../../util/index"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-motion"), require("lodash.merge"), require("lodash/maxBy"), require("../../jPlayer/index"), require("../../store"), require("./actions"), require("../../util/index"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactMotion, global.lodash, global.maxBy, global.index, global.store, global.actions, global.index);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactMotion, _lodash, _maxBy, _index, _store, _actions, _index3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PlaylistControls = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _maxBy2 = _interopRequireDefault(_maxBy);

    var _index2 = _interopRequireDefault(_index);

    var _store2 = _interopRequireDefault(_store);

    var actions = _interopRequireWildcard(_actions);

    var utilities = _interopRequireWildcard(_index3);

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

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

    var jPlaylist = function jPlaylist(WrappedComponent) {
        return function (_React$Component) {
            _inherits(JPlaylist, _React$Component);

            _createClass(JPlaylist, null, [{
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
                key: "defaultProps",
                get: function get() {
                    return {
                        functions: [],
                        html: {},
                        playlist: [],
                        shuffleOnLoop: true,
                        shuffled: false,
                        itemClass: "jp-playlist-item",
                        freeItemClass: "jp-playlist-item-free",
                        removeItemClass: "jp-playlist-item-remove",
                        freeGroupClass: "jp-free-media"
                    };
                }
            }]);

            function JPlaylist(props) {
                _classCallCheck(this, JPlaylist);

                var _this = _possibleConstructorReturn(this, (JPlaylist.__proto__ || Object.getPrototypeOf(JPlaylist)).call(this, props));

                _this._hideDetails = function () {
                    return _this.addClass(utilities.className.hidden, _this.key.detailsClass);
                };

                _this._showDetails = function () {
                    return _this.removeClass(utilities.className.hidden, _this.key.detailsClass);
                };

                _this._trigger = function (func, jPlayer) {
                    if (func !== undefined) {
                        func.bind(_this)(jPlayer);
                    }
                };

                _this._addFreeMediaLinks = function (media) {
                    if (!media.free) return;

                    var firstMediaLinkAdded = true;

                    media.freeMediaLinks = [];

                    for (var property in media) {
                        // Check property is a media format
                        if (_index2.default.format[property]) {
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

                _this._setup = function () {
                    _this.cssSelector = Object.assign({}, { cssPlaylistOptionsSelector: _this.state.cssSelectorAncestor }, _this.state.cssSelector);

                    // Put the title in its initial display state
                    if (!_this.props.fullScreen) {
                        _this._hideDetails();
                    }

                    var newUpdateButtonCallback = function newUpdateButtonCallback(originalFunction) {
                        return function () {
                            originalFunction.apply(this, arguments);
                            var stateClassMethod = this.props.loop === "loop-playlist" ? this.addClass : this.removeClass;
                            stateClassMethod(this.stateClass.loopedPlaylist, utilities.key.stateClass);
                        }.bind(_this);
                    };
                    _this.jPlayer._updateButtons = newUpdateButtonCallback(_this.jPlayer._updateButtons);

                    _this._init();
                };

                _this._init = function () {
                    if (_this.props.autoPlay) {
                        _this.play(_this.state.current);
                    } else {
                        _this.select(_this.state.current);
                    }
                };

                _this._initPlaylist = function (playlist) {
                    _this.setState({ current: 0 });
                    _this.assignOptions({ shuffled: false });
                    _this.original = [].concat(_toConsumableArray(playlist)); // Copy the Array of Objects

                    for (var i = 0; i < _this.original.length; i++) {
                        _this.original[i].key = i;
                        _this._addFreeMediaLinks(_this.original[i]);
                    }

                    _this._originalPlaylist();
                };

                _this._originalPlaylist = function (playlistSetCallback) {
                    return _this.assignOptions({ playlist: [].concat(_toConsumableArray(_this.original)) }, playlistSetCallback);
                };

                _this.setPlaylist = function (playlist) {
                    _this._initPlaylist(playlist);
                    _this._init();
                };

                _this.add = function (media, playNow) {
                    _this._addFreeMediaLinks(media);
                    media.key = (0, _maxBy2.default)(_this.props.playlist, "key").key + 1;

                    _this.original.push(media);
                    _this.modifyOptionsArray(media, Array.prototype.concat, _this.key.playlist);

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
                        _this.mergeOptions({ status: { media: [] } });
                        return true;
                    } else {
                        _this.mergeOptions({ playlist: _defineProperty({}, index, { isRemoving: true }) });
                    }
                    _this.setState({ useRemoveConfig: true });
                };

                _this.select = function (index, autoPlay) {
                    var playCallback = autoPlay ? function () {
                        return _this.mergeOptions({ status: { paused: false } });
                    } : null;

                    index = index < 0 ? _this.original.length + index : index; // Negative index relates to end of array.
                    if (0 <= index && index < _this.props.playlist.length) {
                        _this.setState({ current: index });
                        _this.mergeOptions({ status: { media: _this.props.playlist[index] } }, playCallback);
                    } else {
                        _this.setState({ current: 0 });
                    }
                };

                _this.play = function (index) {
                    index = index < 0 ? _this.original.length + index : index; // Negative index relates to end of array.
                    if (0 <= index && index < _this.props.playlist.length) {
                        if (_this.props.playlist.length) {
                            _this.select(index, true);
                        }
                    } else if (index === undefined) {
                        _this.mergeOptions({ status: { paused: false } });
                    }
                };

                _this.pause = function () {
                    return _this.mergeOptions({ status: { paused: true } });
                };

                _this.next = function () {
                    var index = _this.state.current + 1 < _this.props.playlist.length ? _this.state.current + 1 : 0;

                    if (_this.props.loop === "loop") {
                        _this.play(_this.state.current);
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
                    var index = _this.state.current - 1 >= 0 ? _this.state.current - 1 : _this.props.playlist.length - 1;

                    if (_this.props.loop === "loop-playlist" && _this.props.loopOnPrevious || index < _this.props.playlist.length - 1) {
                        _this.play(index);
                    }
                };

                _this.shuffle = function (shuffled, playNow) {
                    if (shuffled === undefined) {
                        shuffled = !_this.props.shuffled;
                    }

                    _this.playNow = playNow;
                    _this.assignOptions({ shuffled: shuffled });
                    _this.setState({ isPlaylistContainerSlidingUp: true });
                    _this.setState({ useShuffleConfig: true });
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
                    _this.modifyOptionsArray(function (_, i) {
                        return i !== index;
                    }, Array.prototype.filter, _this.key.playlist);

                    if (_this.original.length) {
                        if (index === _this.state.current) {
                            _this.state.current = index < _this.original.length ? _this.state.current : _this.original.length - 1; // To cope when last element being selected when it was removed
                            _this.select(_this.state.current);
                        } else if (index < _this.state.current) {
                            _this.setState(function (previousState) {
                                return [{ current: previousState.current-- }];
                            });
                        }
                    } else {
                        _this.mergeOptions({ status: { media: [] } });
                        _this.setState({ current: 0 });
                        _this.assignOptions({ shuffled: false });;
                    }

                    _this.setState({ useRemoveConfig: false });
                };

                _this._shuffleAnimationCallback = function () {
                    if (!_this.state.isPlaylistContainerSlidingUp) {
                        _this.setState({ useShuffleConfig: false });
                        return;
                    }

                    var playlistSetCallback = function playlistSetCallback() {
                        if (_this.playNow || !_this.props.status.paused) {
                            _this.play(0);
                        } else {
                            _this.select(0);
                        }
                    };

                    if (_this.props.shuffled) {
                        _this.assignOptions({ playlist: [].concat(_toConsumableArray(_this.props.playlist)).sort(function () {
                                return 0.5 - Math.random();
                            }) });
                        _this.addClass(_this.stateClass.shuffled, utilities.key.stateClass, playlistSetCallback);
                    } else {
                        _this._originalPlaylist(playlistSetCallback);
                        _this.removeClass(_this.stateClass.shuffled, utilities.key.stateClass);
                    }

                    setTimeout(function () {
                        return _this.setState({ isPlaylistContainerSlidingUp: false });
                    }, 0);
                };

                _this.blur = function (that) {
                    if (_this.props.autoBlur) {
                        that.blur();
                    }
                };

                WrappedComponent = (0, _index2.default)(WrappedComponent, PlaylistControls);

                _this.playlistContainerMinHeight = _this.playlistItemAnimMinHeight = 0;
                _this.playlistContainerMaxHeight = _this.playlistItemAnimMaxHeight = 1;

                _this.assignOptions = utilities.assignOptions.bind(_this);
                _this.mergeOptions = utilities.mergeOptions.bind(_this);
                _this.modifyOptionsArray = utilities.modifyOptionsArray.bind(_this);
                _this.addClass = utilities.addClass.bind(_this);
                _this.removeClass = utilities.removeClass.bind(_this);
                _this.assignStyle = utilities.assignStyle.bind(_this);

                _this.state = {
                    current: 0
                };

                _this.event = {
                    onEnded: function onEnded() {
                        _this.next();
                        _this._trigger(_this.props.onEnded);
                    },
                    onPlay: function onPlay() {
                        actions.updateOthersOption(_this.props.jPlayerSelector, true, "paused");
                        _this._trigger(_this.props.onPlay);
                    },
                    onResize: function onResize() {
                        _this.props.fullScreen ? _this._showDetails() : _this._hideDetails();
                        _this._trigger(_this.props.onResize);
                    }
                };

                _this.key = {
                    playlist: "playlist",
                    detailsClass: "detailsClass",
                    shuffleOffClass: "shuffleOffClass"
                };

                //Add a new stateClass for the extra loop option
                _this.stateClass = (0, _lodash2.default)({
                    shuffled: "jp-state-shuffled",
                    loopedPlaylist: "jp-state-loop-playlist"
                }, _this.props.stateClass);

                _this.keyBindings = (0, _lodash2.default)({
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
                }, _this.props.keyBindings);

                _this.freeMediaLinkIndex = 0;
                return _this;
            }

            _createClass(JPlaylist, [{
                key: "componentWillMount",
                value: function componentWillMount() {
                    var _this2 = this;

                    this._initPlaylist(this.props.playlist);
                    _store2.default.on("jPlayerChange", function () {
                        debugger;
                        if (_store2.default.identifier !== _this2.props.jPlayerSelector) {
                            _this2.mergeOptions({ status: { paused: _store2.default.paused } });
                        }
                    });
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this._setup();
                }
            }, {
                key: "render",
                value: function render() {
                    var _this3 = this;

                    var MediaAnimationConfig = this.state.useRemoveConfig ? this.props.removeAnimation : this.props.addAnimation;
                    var playlistControlProps = {
                        blur: this.blur,
                        shuffle: this.shuffle,
                        next: this.next,
                        previous: this.previous,
                        html: this.props.html,
                        shuffled: this.props.shuffled
                    };

                    return _react2.default.createElement(
                        WrappedComponent,
                        _extends({ ref: function ref(jPlayer) {
                                return _this3.jPlayer = jPlayer;
                            } }, this.props, this.keyBindings, this.event, { stateClass: this.stateClass, loopOptions: "loop-playlist",
                            additionalControlProps: playlistControlProps }),
                        _react2.default.createElement(
                            "div",
                            { id: "jp_container_playlist" },
                            _react2.default.createElement(
                                "div",
                                { className: "jp-playlist" },
                                _react2.default.createElement(
                                    Playlist,
                                    { isSlidingUp: this.state.isPlaylistContainerSlidingUp, config: this.state.useShuffleConfig ? this.props.shuffleAnimation : this.props.displayAnimation, onRest: this._shuffleAnimationCallback },
                                    _react2.default.createElement(Media, { medias: this.props.playlist, current: this.state.current, config: MediaAnimationConfig, onRest: this._removeAnimationCallback,
                                        removeItemClass: this.props.removeItemClass, freeGroupClass: this.props.freeGroupClass, itemClass: this.props.itemClass, enableRemoveControls: this.props.enableRemoveControls,
                                        remove: this.remove, blur: this.blur, play: this.play, mergeOptions: this.mergeOptions })
                                )
                            )
                        ),
                        this.props.children
                    );
                }
            }]);

            return JPlaylist;
        }(_react2.default.Component);
    };

    var PlaylistControls = exports.PlaylistControls = function (_React$Component2) {
        _inherits(PlaylistControls, _React$Component2);

        function PlaylistControls(props) {
            _classCallCheck(this, PlaylistControls);

            var _this4 = _possibleConstructorReturn(this, (PlaylistControls.__proto__ || Object.getPrototypeOf(PlaylistControls)).call(this));

            _this4._onShuffleClick = function (event) {
                event.preventDefault();

                _this4.props.shuffle(!_this4.props.shuffled);
                _this4.props.blur(event.target);
            };

            _this4._onPreviousClick = function (event) {
                event.preventDefault();

                _this4.props.previous();
                _this4.props.blur(event.target);
            };

            _this4._onNextClick = function (event) {
                event.preventDefault();

                _this4.props.next();
                _this4.props.blur(event.target);
            };

            _this4.state = {};
            _this4.className = {
                details: "jp-details",
                shuffle: "jp-shuffle",
                previous: "jp-previous",
                next: "jp-next",
                extraControls: "jp-extra-controls"
            };
            return _this4;
        }

        _createClass(PlaylistControls, [{
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { className: "jp-playlist-controls" },
                    _react2.default.createElement(
                        "a",
                        { className: this.className.shuffle, onClick: this._onShuffleClick },
                        this.props.html.shuffle
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: this.className.previous, onClick: this._onPreviousClick },
                        this.props.html.previous
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: this.className.next, onClick: this._onNextClick },
                        this.props.html.next
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: this.className.extraControls },
                        this.props.html.playlistOptions
                    )
                );
            }
        }]);

        return PlaylistControls;
    }(_react2.default.Component);

    var Media = function (_React$Component3) {
        _inherits(Media, _React$Component3);

        _createClass(Media, null, [{
            key: "defaultProps",
            get: function get() {
                return {
                    minHeight: 0,
                    maxHeight: 1
                };
            }
        }]);

        function Media(props) {
            _classCallCheck(this, Media);

            var _this5 = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

            _this5._onRemoveMediaClick = function (index, event) {
                event.preventDefault();

                _this5.props.remove(index);
                _this5.props.blur(event.target);
            };

            _this5._onMediaLinkClick = function (index, event) {
                event.preventDefault();

                _this5.props.current !== index ? _this5.props.play(index) : _this5.props.mergeOptions({ status: { paused: false } });
                _this5.props.blur(event.target);
            };

            _this5.state = {};
            _this5.className = {
                currentMedia: "jp-playlist-current"
            };
            return _this5;
        }

        _createClass(Media, [{
            key: "render",
            value: function render() {
                var _this6 = this;

                return _react2.default.createElement(
                    "div",
                    null,
                    this.props.medias.map(function (media, index) {
                        var animationHeight = media.isRemoving ? _this6.props.minHeight : _this6.props.maxHeight;
                        var mediaListClass = _this6.props.current === index ? _this6.className.currentMedia : null;
                        var mediaLinkClass = _this6.props.current === index ? _this6.props.itemClass + " " + _this6.className.currentMedia : _this6.props.itemClass;
                        var onRest = media.isRemoving ? function () {
                            return _this6.props.onRest(index);
                        } : null;

                        return _react2.default.createElement(
                            _reactMotion.Motion,
                            { key: media.key, defaultStyle: { heightToInterpTo: _this6.props.minHeight }, style: { heightToInterpTo: (0, _reactMotion.spring)(animationHeight, _this6.props.config) }, onRest: onRest },
                            function (values) {
                                return _react2.default.createElement(
                                    "li",
                                    { className: mediaListClass, style: { transform: "scaleY(" + values.heightToInterpTo + ")", transformOrigin: "50% top" } },
                                    _this6.props.enableRemoveControls && _react2.default.createElement(
                                        "a",
                                        { href: "javascript:;", className: _this6.props.removeItemClass, onClick: _this6._onRemoveMediaClick.bind(_this6, index) },
                                        "\xD7"
                                    ),
                                    media.free && _react2.default.createElement(
                                        "span",
                                        { className: _this6.props.freeGroupClass },
                                        "(",
                                        media.freeMediaLinks,
                                        ")"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascript:;", className: mediaLinkClass, onClick: _this6._onMediaLinkClick.bind(_this6, index), tabIndex: "0" },
                                        _react2.default.createElement("img", { src: media.poster }),
                                        media.title,
                                        media.artist && _react2.default.createElement(
                                            "span",
                                            { className: "jp-artist" },
                                            "by ",
                                            media.artist
                                        )
                                    )
                                );
                            }
                        );
                    })
                );
            }
        }]);

        return Media;
    }(_react2.default.Component);

    var Playlist = function Playlist(props) {
        var animationHeight = props.isSlidingUp ? props.minHeight : props.maxHeight;

        return _react2.default.createElement(
            _reactMotion.Motion,
            { defaultStyle: { heightToInterpTo: props.minHeight }, style: { heightToInterpTo: (0, _reactMotion.spring)(animationHeight, props.config) }, onRest: props.onRest },
            function (values) {
                return _react2.default.createElement(
                    "ul",
                    { style: { transform: "scaleY(" + values.heightToInterpTo + ")", transformOrigin: "50% top" } },
                    props.children
                );
            }
        );
    };

    Playlist.defaultProps = {
        minHeight: 0,
        maxHeight: 1
    };

    Playlist.propTypes = {
        children: _react2.default.PropTypes.element.isRequired
    };

    exports.default = jPlaylist;
});