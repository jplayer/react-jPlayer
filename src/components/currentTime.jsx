import React from 'react';

import { classes } from '../util/constants';

const CurrentTime = ({ currentTimeText, attributes }) => (
  <div className={classes.CURRENT_TIME} {...attributes}>
    {currentTimeText}
  </div>
);

CurrentTime.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  currentTimeText: React.PropTypes.string,
};

export default CurrentTime;
