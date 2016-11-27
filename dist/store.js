(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "redux", "./reducers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("redux"), require("./reducers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.redux, global.reducers);
    global.store = mod.exports;
  }
})(this, function (exports, _redux, _reducers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reducers2 = _interopRequireDefault(_reducers);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _redux.createStore)(_reducers2.default);
});