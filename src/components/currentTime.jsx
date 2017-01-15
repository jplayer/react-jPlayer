import React from 'react';

import { classes } from '../util/constants';

const CurrentTime = ({ currentTimeText, ...attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME}>
    {currentTimeText}
  </div>
);

CurrentTime.propTypes = {
  currentTimeText: React.PropTypes.string.isRequired,
};

export default CurrentTime;
