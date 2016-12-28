(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["react", "../src/index"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("react"), require("../src/index"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.index);
        global.jPlaylistDemo = mod.exports;
    }
})(this, function (_react, _index) {
    "use strict";

    var _react2 = _interopRequireDefault(_react);

    var _index2 = _interopRequireDefault(_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
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

    var ExampleComponent = function (_React$Component) {
        _inherits(ExampleComponent, _React$Component);

        function ExampleComponent(props) {
            _classCallCheck(this, ExampleComponent);

            var _this = _possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).call(this, props));

            _this.state = {};
            return _this;
        }

        _createClass(ExampleComponent, [{
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }]);

        return ExampleComponent;
    }(_react2.default.Component);

    var jPlayerOptions = {
        jPlayerSelector: "jplayer_footer_player2",
        cssSelectorAncestor: "jp_container_footer_player2",
        controls: {
            //Toggle between play and pause in css based on playing or not
            play: _react2.default.createElement("i", { className: "fa fa-play" }),
            mute: _react2.default.createElement("i", { className: "fa fa-volume-up" }),
            fullScreen: _react2.default.createElement("i", { className: "fa fa-expand" }),
            repeat: _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("i", { className: "fa fa-repeat" }),
                _react2.default.createElement("i", { className: "fa fa-bars" })
            )

        },
        smoothPlayBar: false,
        muted: true,
        keyEnabled: true,
        globalVolume: false,
        onError: function onError(jPlayer) {
            return console.error(jPlayer.error);
        }
    };
    // <i className="fa fa-ellipsis-h"></i>
    // <i className="fa fa-comment"></i>
    // <i key="shuffle" className="fa fa-random"></i>
    // <i key="previous" className="fa fa-step-backward"></i>
    // <i key="next" className="fa fa-step-forward"></i>
    // <div key="repeat">
    //     <i className="fa fa-repeat"></i>
    //     <i className="fa fa-bars"></i>
    // </div>
    var jPlaylistDefaultOptions = {
        playlist: [{
            title: "Cro Magnon Man",
            artist: "The Stark Palace",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
            free: true
        }, {
            title: "Tempered Song",
            artist: "Miaow",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
            free: true
        }, {
            title: "Das Song",
            artist: "Miaow",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        }, {
            title: "Song",
            artist: "Miaow",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
            free: true
        }],
        loopOnPrevious: true,
        enableRemoveControls: true
    };

    //renderjPlayer(jPlaylist(ExampleComponent), jPlaylistOptions);
});