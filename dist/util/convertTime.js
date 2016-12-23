(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.convertTime = mod.exports;
    }
})(this, function (exports, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (s) {
        s = s && typeof s === "number" ? s : 0;

        var myTime = new Date(s * 1000),
            hour = myTime.getUTCHours(),
            min = _constants.timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
            sec = _constants.timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
            strHour = _constants.timeFormats.padHour && hour < 10 ? "0" + hour : hour,
            strMin = _constants.timeFormats.padMin && min < 10 ? "0" + min : min,
            strSec = _constants.timeFormats.padSec && sec < 10 ? "0" + sec : sec;

        var strTime = "";
        strTime += _constants.timeFormats.showHour ? strHour + _constants.timeFormats.sepHour : "";
        strTime += _constants.timeFormats.showMin ? strMin + _constants.timeFormats.sepMin : "";
        strTime += _constants.timeFormats.showSec ? strSec + _constants.timeFormats.sepSec : "";

        return strTime;
    };
});