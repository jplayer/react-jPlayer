import React from "react";
import NativeVideoControls from "./nativeVideoControls";

const video = props => (
	props.require ?
		<video ref={props.mediaRef} className={props.videoClass} style={props.style} onClick={props.onClick} {...props.events}>
			{props.children}
			<NativeVideoControls {...props} />
		</video>
		: null
);

export default video;