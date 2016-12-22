import React from "react";

const Audio = ({setCurrentMedia, events, children, ...props}) => (
    <audio ref={setCurrentMedia} {...events} {...props}>
        {children}
    </audio>
);

Audio.contextTypes = {
    setCurrentMedia: React.PropTypes.func
}

export default Audio;