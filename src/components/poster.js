import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../util/index";
import {keys, classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
    mediaSettings: state.jPlayer.mediaSettings,
    media: state.jPlayer.media,
    src: state.jPlayer.posterSrc,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        render() {
            return (
                <img className={classNames.POSTER} src={this.props.src} onClick={this.props.onClick} {...this.props.attributes} />    
            );
        }
    }
)