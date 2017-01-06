import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../util/constants';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  currentTimeText: jPlayers[id].currentTimeText,
});

const CurrentTime = ({ currentTimeText, ...attributes }) => (
  <div className={classes.CURRENT_TIME} {...attributes}>{currentTimeText}</div>
);

CurrentTime.propTypes = {
  currentTimeText: React.PropTypes.string,
};

export default connect(mapStateToProps)(jPlayerConnect(CurrentTime, mapJPlayerProps));
