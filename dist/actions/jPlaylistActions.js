(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../util/constants", "./generator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../util/constants"), require("./generator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.constants, global.generator);
    global.jPlaylistActions = mod.exports;
  }
})(this, function (_constants, _generator) {
  "use strict";

  var _generator2 = _interopRequireDefault(_generator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});