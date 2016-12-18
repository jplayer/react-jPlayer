import React from "react";

const Audio = props => (
	props.require ?
		<audio ref={props.mediaRef} {...props.events}>
			{props.children}
		</audio>
		: null
);

export default Audio;