import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";
import {duration} from "../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    toggleDuration: state.jPlayer.toggleDuration,
    captureDuration: state.jPlayer.captureDuration,
    durationText: state.jPlayer.durationText,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        onDurationClick = (e) => {
            if(this.props.toggleDuration) {
                if(this.props.captureDuration) {
                    e.stopPropagation();
                }
                this.props.dispatch(duration());
            }
        }
        render() {
            return <div className={classNames.DURATION} onClick={this.onDurationClick} {...this.props.attributes}>{this.props.durationText}</div>
        }
    }
);