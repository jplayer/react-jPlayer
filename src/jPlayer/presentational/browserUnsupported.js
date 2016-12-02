import React from "react";

const BrowserUnsupported = (props) => (
    <div className={props.noSolutionClass.join(" ")}>
        <span>Update Required</span>
        To play the media you will need to update your browser to a recent version.
    </div>
);