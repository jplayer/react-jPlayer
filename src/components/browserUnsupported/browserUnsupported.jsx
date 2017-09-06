import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import { classes } from '../../util/constants';

const BrowserUnsupported = ({ children }) => (
  <div className={classes.NO_BROWSER_SUPPORT}>
    {children}
  </div>
);

const defaultChildren = (
  <div>
    <h4>Browser Unsupported</h4>
    Your browser does not support this media file.
    To play the media you will need to update your browser to a more recent version.
  </div>
);

BrowserUnsupported.defaultProps = {
  children: defaultChildren,
};

BrowserUnsupported.propTypes = {
  children: PropTypes.node,
};

export default compose(
  branch(
    props => props.nonSupported,
    renderComponent(BrowserUnsupported),
  ),
)(renderNothing(null));

