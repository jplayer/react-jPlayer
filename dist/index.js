(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-dom", "react-redux", "redux", "./store", "lodash.merge", "./actions/jPlayerActions", "./containers/jPlayer", "./less/jPlayer.less"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-dom"), require("react-redux"), require("redux"), require("./store"), require("lodash.merge"), require("./actions/jPlayerActions"), require("./containers/jPlayer"), require("./less/jPlayer.less"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.reactRedux, global.redux, global.store, global.lodash, global.jPlayerActions, global.jPlayer, global.jPlayer);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _reactRedux, _redux, _store, _lodash, _jPlayerActions, _jPlayer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _store2 = _interopRequireDefault(_store);

    var _lodash2 = _interopRequireDefault(_lodash);

    var jPlayerActions = _interopRequireWildcard(_jPlayerActions);

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

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            jPlayer: state.jPlayer,
            jPlaylist: state.jPlaylist
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return (0, _redux.bindActionCreators)(jPlayerActions, dispatch);
    };

    exports.default = function (WrappedComponent, jPlayerOptions) {
        WrappedComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WrappedComponent);

        var initialState = {
            jPlayer: (0, _lodash2.default)({}, _jPlayer.defaultValues, _jPlayer.statusDefaultValues, _jPlayer.jPlayerDefaultOptions, jPlayerOptions)
        };

        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: (0, _store2.default)(initialState) },
            _react2.default.createElement(WrappedComponent, null)
        ), document.getElementById(jPlayerOptions.jPlayerSelector));
    };
});