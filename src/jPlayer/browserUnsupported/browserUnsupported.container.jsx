import React from 'react';

import { connectWithId } from '../../util/index';
import BrowserUnsupported from './browserUnsupported';
import { classes } from '../../util/constants';

const getDefaultChildren = attributes => (
  <div {...attributes} className={classes.NO_BROWSER_SUPPORT}>
    <h4>Browser Unsupported</h4>
    <div>
      Your browser is not supported.
      To play any media you will need to update your browser to a more recent version.
    </div>
  </div>
);

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  foundSupported: jPlayers[uid].mediaSettings.foundSupported,
  children: children || getDefaultChildren(attributes),
});

const mergeProps = stateProps => ({ ...stateProps });

export default connectWithId(mapStateToProps, null, mergeProps)(BrowserUnsupported);
