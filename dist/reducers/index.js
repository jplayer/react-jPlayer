(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "redux", "lodash/get", "lodash/set", "../util/constants", "./jPlayerReducer", "./jPlaylistReducer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("redux"), require("lodash/get"), require("lodash/set"), require("../util/constants"), require("./jPlayerReducer"), require("./jPlaylistReducer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.redux, global.get, global.set, global.constants, global.jPlayerReducer, global.jPlaylistReducer);
        global.index = mod.exports;
    }
})(this, function (exports, _redux, _get, _set, _constants, _jPlayerReducer, _jPlaylistReducer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _get2 = _interopRequireDefault(_get);

    var _set2 = _interopRequireDefault(_set);

    var _jPlayerReducer2 = _interopRequireDefault(_jPlayerReducer);

    var _jPlaylistReducer2 = _interopRequireDefault(_jPlaylistReducer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = (0, _redux.combineReducers)({
        jPlayer: _jPlayerReducer2.default,
        jPlaylist: _jPlaylistReducer2.default
    });
});