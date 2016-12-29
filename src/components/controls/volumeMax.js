import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue,updateObjectByKey} from "../../util/index";
import {classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    muted: state.jPlayer.muted,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        onVolumeMaxClick = () => {
            this.props.dispatch(volume(1));

            if(this.props.muted) {
                this.props.dispatch(mute(false));
            }
        }
        render() {
            return <a className={classNames.VOLUME_MAX} onClick={this.props.onVolumeMaxClick} {...this.props.attributes}>{this.props.children}</a>
        }
    }  
);