import React from "react";
import {connect} from "react-redux";
import screenfull from "screenfull";

import {classNames} from "../../util/constants";
import {fullScreen} from "../../actions/jPlayerActions";

export default connect()(
    class extends React.Component {
        constructor(props) {
            super();
        }
        onFullScreenClick = () => this.props.dispatch(fullScreen(!screenfull.isFullscreen))
        render() {
            return <a className={classNames.FULL_SCREEN} onClick={this.onFullScreenClick}>{this.props.children}</a>
        }
    }  
);