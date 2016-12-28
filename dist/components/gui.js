(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "react", "../util/constants"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("react"), require("../util/constants"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.constants);
		global.gui = mod.exports;
	}
})(this, function (exports, _react, _constants) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var constants = _interopRequireWildcard(_constants);

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

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

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

	var _class = function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this._setFading = function (event) {
				if (!_this.state.isFadingIn) {
					_this.fadeHoldTimeout = setTimeout(function () {
						_this.setState({ isFadingIn: false });
					}, _this.props.hold);
				}

				_this.setState({ isFadingIn: true });
			};

			_this.state = {};
			return _this;
		}

		_createClass(_class, [{
			key: "render",
			value: function render() {
				var _this2 = this;

				return this.props.fullWindow && this.props.full || !this.props.fullWindow && this.props.restored ? _react2.default.createElement(
					"div",
					{ className: this.props.nativeVideoControls ? constants.classNames.HIDDEN : null, onMouseMove: this._setFading, style: GUI_WRAPPER_STYLE },
					_react2.default.createElement(
						Motion,
						{ defaultStyle: { opacityToInterpTo: 1 }, style: { opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig) } },
						function (values) {
							return _react2.default.createElement(
								"div",
								{ className: "jp-gui", onMouseLeave: function onMouseLeave() {
										return _this2.setState({ isFadingIn: false });
									}, onMouseEnter: function onMouseEnter() {
										return clearTimeout(_this2.fadeHoldTimeout);
									},
									style: { opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : "" } },
								_this2.props.children
							);
						}
					)
				) : _react2.default.createElement(
					"div",
					{ className: this.props.nativeVideoControls ? "jp-gui " + constants.className.HIDDEN : "jp-gui" },
					this.props.children
				);
			}
		}], [{
			key: "propTypes",
			get: function get() {
				return {
					restored: _react2.default.PropTypes.bool, // Controls the interface autohide feature.
					full: _react2.default.PropTypes.bool, // Controls the interface autohide feature.
					hold: _react2.default.PropTypes.number, // Milliseconds. The period of the pause before autohide beings.
					fullWindow: _react2.default.PropTypes.bool,
					nativeVideoControls: _react2.default.PropTypes.bool,
					fadeInConfig: _react2.default.PropTypes.object,
					fadeOutConfig: _react2.default.PropTypes.object
				};
			}
		}, {
			key: "defaultProps",
			get: function get() {
				return {
					fadeInConfig: {
						stiffness: 40 // Velocity of the animation (higher the faster), other properties automatically set in the Motion component
					},
					fadeOutConfig: {
						stiffness: 40
					},
					restored: false, // Controls the interface autoHide feature.
					full: true, // Controls the interface autoHide feature.
					hold: 2000 // Milliseconds. The period of the pause before autoHide beings.
				};
			}
		}]);

		return _class;
	}(_react2.default.Component);

	exports.default = _class;


	var GUI_WRAPPER_STYLE = {
		width: "100%",
		height: "100%",
		position: "fixed",
		top: "0"
	};
});