import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {fullScreen} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    fullScreen: state.jPlayer.fullScreen,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        onFullScreenClick = () => this.props.dispatch(fullScreen(!this.props.fullScreen))
        render() {
            return <a className={classNames.FULL_SCREEN} onClick={this.onFullScreenClick} {...this.props.attributes}>{this.props.children}</a>
        }
    }  
);