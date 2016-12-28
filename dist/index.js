(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-dom", "react-redux", "./store", "lodash.merge", "./containers/jPlayer", "../src/less/jPlayer.less"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-dom"), require("react-redux"), require("./store"), require("lodash.merge"), require("./containers/jPlayer"), require("../src/less/jPlayer.less"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.reactRedux, global.store, global.lodash, global.jPlayer, global.jPlayer);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _reactRedux, _store, _lodash, _jPlayer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _store2 = _interopRequireDefault(_store);

    var _lodash2 = _interopRequireDefault(_lodash);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return { jPlayer: state.jPlayer, jPlaylist: state.jPlaylist };
    };

    exports.default = function (WrappedComponent, jPlayerOptions) {
        var initialState = {
            jPlayer: (0, _lodash2.default)({}, _jPlayer.statusDefaultValues, _jPlayer.jPlayerDefaultOptions, jPlayerOptions)
        };
        WrappedComponent = (0, _reactRedux.connect)(mapStateToProps)(WrappedComponent);
        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: (0, _store2.default)(initialState) },
            _react2.default.createElement(WrappedComponent, null)
        ), document.getElementById(jPlayerOptions.jPlayerSelector));
    };
});