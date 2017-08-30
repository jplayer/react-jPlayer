import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Download = ({ url, children }) => (
  <a
    className={classes.DOWNLOAD}
    href={url}
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

Download.defaultProps = {
  url: null,
};

Download.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};

export default Download;
