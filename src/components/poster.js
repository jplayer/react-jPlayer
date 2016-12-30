import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
    mediaSettings: state.jPlayer.mediaSettings,
    media: state.jPlayer.media,
    src: state.jPlayer.posterSrc,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    ({src, attributes}) => <img className={classNames.POSTER} src={src} {...attributes} />
)