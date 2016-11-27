(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "events", "./dispatcher", "./constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("events"), require("./dispatcher"), require("./constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.events, global.dispatcher, global.constants);
        global.storef = mod.exports;
    }
})(this, function (exports, _events, _dispatcher, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

    var _constants2 = _interopRequireDefault(_constants);

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

    var Store = function (_EventEmitter) {
        _inherits(Store, _EventEmitter);

        function Store() {
            _classCallCheck(this, Store);

            var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

            _this.updateOthersOption = function (identifier, optionValue, optionKey) {
                debugger;
                _this[optionKey] = optionValue;
                _this.identifier = identifier;
                _this.emit("jPlayerChange");
            };

            _this.handleActions = function (action) {
                switch (action.type) {
                    case _constants2.default.ActionType.UPDATE_OTHERS_OPTION:
                        _this.updateOthersOption(action.identifier, action.optionValue, action.optionKey);
                        break;
                }
            };

            return _this;
        }

        return Store;
    }(_events.EventEmitter);

    var store = new Store();

    _dispatcher2.default.register(store.handleActions);

    exports.default = store;
});