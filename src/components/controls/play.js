import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {play, pause} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    paused: state.jPlayer.paused,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();
        }
        onPlayClick = () => this.props.paused ? this.props.dispatch(play()) : this.props.dispatch(pause())
        render() {
            return <a className={classNames.PLAY} onClick={this.onPlayClick} {...this.props.attributes}>{this.props.children}</a>
        }
    }  
);