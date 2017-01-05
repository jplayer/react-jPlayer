import React from 'react';
import { connect } from 'react-redux';

import { classNames } from '../util/constants';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  currentTimeText: jPlayers[id].currentTimeText,
});

const CurrentTime = ({ currentTimeText, attributes }) => <div className={classNames.CURRENT_TIME} {...attributes}>{currentTimeText}</div>;

export default connect(mapStateToProps)(jPlayerConnect(CurrentTime, mapJPlayerProps));
