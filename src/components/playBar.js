import React from "react";

const PlayBar = ({currentPercentAbsolute = 0, smoothPlayBar, playBarStyle}) => (
	smoothPlayBar ? 
		<Motion style={{smoothWidth: spring(currentPercentAbsolute, [250])}}>
			{(values) => <div className="jp-play-bar" style={{width: values.smoothWidth + "%"}} />}
		</Motion>
	:	<div className="jp-play-bar" style={playBarStyle} />
);

PlayBar.propTypes = {
    playBarStyle: React.PropTypes.object,
    smoothPlayBar: React.PropTypes.bool,
    currentPercentAbsolute: React.PropTypes.number
}

export default PlayBar;