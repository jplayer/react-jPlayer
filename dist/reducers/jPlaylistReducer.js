(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../util/constants", "../util/index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../util/constants"), require("../util/index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.constants, global.index);
    global.jPlaylistReducer = mod.exports;
  }
})(this, function (_constants, _index) {});