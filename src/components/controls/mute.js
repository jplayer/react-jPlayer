import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mute} from "../../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    muted: state.jPlayer.muted
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();
        }
        onMuteClick = () => this.props.dispatch(mute(!this.props.muted))
        render() {
            return <a className={classNames.MUTE} onClick={this.onMuteClick} {...this.props}>{this.props.children}</a>
        }
    }  
);