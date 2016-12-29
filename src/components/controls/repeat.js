import React from "react";
import {connect} from "react-redux";

import {classNames, loopOptions} from "../../util/constants";
import {mute, loop} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    loop: state.jPlayer.loop,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();
        }
        onRepeatClick = () => this.props.loop === loopOptions.LOOP ? this.props.dispatch(loop(loopOptions.OFF)) : this.props.dispatch(loop(loopOptions.LOOP))
        render() {
            return <a className={classNames.REPEAT} onClick={this.onRepeatClick} {...this.props.attributes}>{this.props.children}</a>
        }
    }  
);