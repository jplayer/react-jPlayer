import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";
import {mapStateToProps} from "../util/index";
import jPlayerConnect from "../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    title: jPlayers[id].media.title
});

const Title = ({title, attributes}) => <div className={classNames.TITLE} {...attributes}>{title}</div>;

export default connect(mapStateToProps)(jPlayerConnect(Title, mapJPlayerProps));