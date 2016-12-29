import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
	fullScreen: state.jPlayer.fullScreen,
	attributes: ownProps
});

export default connect(mapStateToProps)(
	({children, nativeVideoControls, attributes}) => <div className={classNames.GUI} {...attributes}>{children}</div>
);