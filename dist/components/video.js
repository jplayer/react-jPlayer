(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "react"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("react"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react);
		global.video = mod.exports;
	}
})(this, function (exports, _react) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Video = function Video(_ref) {
		var require = _ref.require,
		    mediaRef = _ref.mediaRef,
		    videoClass = _ref.videoClass,
		    styke = _ref.styke,
		    onClick = _ref.onClick,
		    events = _ref.events,
		    children = _ref.children,
		    title = _ref.title;
		return (
			// require ?
			// 	<video ref={mediaRef} className={videoClass} style={style} onClick={onClick} title={title} {...events}>
			// 		{children}		
			// 	</video>
			// 	: null
			_react2.default.createElement("div", null)
		);
	};

	exports.default = Video;
});