import React from "react";
import * as util from "../util/index";
import * as constants from "../util/constants";

const Control = ({onClick, html, className = []}) => {
    debugger;return (
    <a className={className.join(" ")} onClick={onClick}>
        {html}
    </a>
);}

Control.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired,
    html: React.PropTypes.element
}

export default Control;