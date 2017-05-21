import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const BrowserUnsupported = ({ foundSupported, children, ...attributes }) => (
  foundSupported ? null :
  <div className={classes.NO_BROWSER_SUPPORT} {...attributes}>
    {children}
  </div>
);

BrowserUnsupported.defaultProps = {
  children: (
    <div>
      <h4>Browser Unsupported</h4>
      Your browser does not support this media file.
      To play the media you will need to update your browser to a more recent version.
    </div>
  ),
};

BrowserUnsupported.propTypes = {
  children: PropTypes.node,
  foundSupported: PropTypes.bool.isRequired,
};

export default BrowserUnsupported;
