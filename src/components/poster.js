import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {mapStateToProps} from "../util/index";
import jPlayerConnect from "../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    src: jPlayers[id].media.poster
});

const Poster = ({src, attributes}) => <img className={classNames.POSTER} src={src} {...attributes} />;

export default connect(mapStateToProps)(jPlayerConnect(Poster, mapJPlayerProps));