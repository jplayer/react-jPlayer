import React from 'react';

import { classes } from '../../util/constants';

const CurrentTime = ({ ...attributes }) => (
  <div {...attributes} className={classes.CURRENT_TIME} />
);

CurrentTime.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default CurrentTime;
