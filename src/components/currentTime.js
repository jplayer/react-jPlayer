import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
    currentTimeText: state.jPlayer.currentTimeText,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    ({currentTimeText, attributes}) => <div className={classNames.CURRENT_TIME} {...attributes}>{currentTimeText}</div>
);