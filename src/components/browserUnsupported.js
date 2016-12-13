import React from "react";

const BrowserUnsupported = ({noSolutionClass=[]}) => (
    <div className={noSolutionClass.join(" ")}>
        <span>Update Required</span>
        To play the media you will need to update your browser to a recent version.
    </div>
);

BrowserUnsupported.PropTypes = {
    noSolutionClass: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default BrowserUnsupported;