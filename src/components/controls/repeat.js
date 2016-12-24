import React from "react";
import {connect} from "react-redux";

import {classNames, loopOptions} from "../../util/constants";
import {mute} from "../../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    loop: state.jPlayer.loop
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();
        }
        onRepeatClick = () => this.props.loop === loopOptions.LOOP ? this.props.dispatch(loop(loopOptions.OFF)) : this.props.dispatch(loop(loopOptions.LOOP))
        render() {
            return <a className={classNames.REPEAT} onClick={this.props.onRepeatClick} {...this.props}>{this.props.children}</a>
        }
    }  
);