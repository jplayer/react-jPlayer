import React from 'react';
import { classes } from '../../util/constants';

const BrowserUnsupported = ({ foundSupported, children }) => (
  foundSupported ? null : children
);

BrowserUnsupported.defaultProps = {
  children: (
    <div className={classes.NO_BROWSER_SUPPORT}>
      <h4>Browser Unsupported</h4>
      <div>
        Your browser does not support this media file.
        To play the media you will need to update your browser to a more recent version.
      </div>
    </div>
  ),
};

BrowserUnsupported.propTypes = {
  children: React.PropTypes.node,
  foundSupported: React.PropTypes.bool.isRequired,
};

export default BrowserUnsupported;
