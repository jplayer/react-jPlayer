import React from "react";
import {connect} from "react-redux";

import * as constants from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
	fullScreen: state.jPlayer.fullScreen,
	attributes: ownProps
});

export default connect(mapStateToProps)(
	({children, nativeVideoControls, attributes}) => <div className={nativeVideoControls ? "jp-gui " + constants.className.HIDDEN : "jp-gui"} {...attributes}>{children}</div>
);