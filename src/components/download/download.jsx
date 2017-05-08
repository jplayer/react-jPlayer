import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Download = ({ free, url, children, ...attributes }) => (
  free ?
    <a
      className={classes.DOWNLOAD} href={url}
      download target="_blank" rel="noopener noreferrer"
      {...attributes}
    >
      {children}
    </a>
  : null
);

Download.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  free: PropTypes.bool.isRequired,
};

export default Download;
