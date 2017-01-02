import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    src: jPlayers[selector].posterSrc,
    attributes: ownProps
});

const Poster = ({src, attributes}) => <img className={classNames.POSTER} src={src} {...attributes} />;

export default connect(mapStateToProps)(Poster);