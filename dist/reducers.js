(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "redux", "./jPlayer/reducer", "./add-on/jPlaylist/reducer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("redux"), require("./jPlayer/reducer"), require("./add-on/jPlaylist/reducer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.redux, global.reducer, global.reducer);
        global.reducers = mod.exports;
    }
})(this, function (exports, _redux, _reducer, _reducer3) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _reducer2 = _interopRequireDefault(_reducer);

    var _reducer4 = _interopRequireDefault(_reducer3);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = (0, _redux.combineReducers)({
        jPlayer: _reducer2.default,
        jPlaylist: _reducer4.default
    });
});