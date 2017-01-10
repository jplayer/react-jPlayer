import React from 'react';

import { classes } from '../util/constants';

const CurrentTime = ({ currentTimeText, attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {currentTimeText}
  </div>
);

CurrentTime.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  currentTimeText: React.PropTypes.string,
};

export default CurrentTime;
