import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const BrowserUnsupported = ({ nonSupported, children, ...attributes }) => (
  nonSupported ?
    <div className={classes.NO_BROWSER_SUPPORT} {...attributes}>
      {children}
    </div> : null
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
  nonSupported: PropTypes.bool.isRequired,
};

export default BrowserUnsupported;
