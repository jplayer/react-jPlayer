import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    currentTimeText: jPlayers[selector].currentTimeText,
    attributes: ownProps
});

const CurrentTime = ({currentTimeText, attributes}) => <div className={classNames.CURRENT_TIME} {...attributes}>{currentTimeText}</div>;

export default connect(mapStateToProps)(CurrentTime);