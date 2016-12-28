import React from "react";
import {connect} from "react-redux";

import {duration} from "./actions/jPlayerActions";

const mapStateToProps = (state) => ({
    toggleDuration: state.jPlayer.toggleDuration,
    captureDuration: state.jPlayer.captureDuration
});

export default WrappedComponent => connect(mapStateToProps)(
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
            return <WrappedComponent onDurationClick={this.onDurationClick} />
        }
    }
);