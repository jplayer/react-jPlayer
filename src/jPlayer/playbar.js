import React from "react";

const PlayBar = (props) => (
	props.smoothPlayBar ? 
		<Motion style={{smoothWidth: spring(props.currentPercentAbsolute, [250])}}>
			{(values) => <div className="jp-play-bar" style={{width: values.smoothWidth + "%"}} />}
		</Motion>
	:	<div className="jp-play-bar" style={props.playBarStyle} />
);

PlayBar.defaultProps = {
    currentPercentAbsolute: 0
};

export default PlayBar;