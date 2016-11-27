(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "flux"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("flux"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.flux);
    global.dispatcherf = mod.exports;
  }
})(this, function (exports, _flux) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = new _flux.Dispatcher();
});