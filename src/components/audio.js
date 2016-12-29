import React from "react";

const Audio = ({children, setCurrentMedia, ...props}) => (
    <audio ref={setCurrentMedia} {...props}>
        {children}
    </audio>
);

export default Audio;