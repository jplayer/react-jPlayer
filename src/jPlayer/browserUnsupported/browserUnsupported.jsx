import React from 'react';

import { classes } from '../../util/constants';

const BrowserUnsupported = ({ foundSupported, children }) => (
  !foundSupported ? children : null
);

BrowserUnsupported.defaultProps = {
  children: (
    <div className={classes.NO_BROWSER_SUPPORT}>
      <h4>Browser Unsupported</h4>
      <div>
        Your browser is not supported.
        To play any media you will need to update your browser to a more recent version.
      </div>
    </div>
  ),
};

BrowserUnsupported.propTypes = {
  children: React.PropTypes.node,
};

export default BrowserUnsupported;
