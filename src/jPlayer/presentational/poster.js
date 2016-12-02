import React from "react";

export default (props) => (
	<img className={props.posterClass} src={props.src} style={props.style} onLoad={props.onLoad} onClick={props.onClick} />
);