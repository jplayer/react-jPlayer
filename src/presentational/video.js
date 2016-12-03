import React from "react";

const Video = (props) => (
	props.require &&
		<video ref={props.mediaRef} className={props.videoClass} style={props.style} onClick={props.onClick} {...props.events}>
			{props.children}
		</video>
);