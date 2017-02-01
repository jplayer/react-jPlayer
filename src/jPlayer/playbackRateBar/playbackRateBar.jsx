import React from 'react';

import { classes } from '../../util/constants';

const PlaybackRateBar = ({ onClick, onMouseDown, setPlaybackRate, children, ...attributes }) => (
  <div
    {...attributes} ref={setPlaybackRate}
    className={classes.PLAYBACK_RATE_BAR} onClick={onClick}
    onMouseDown={onMouseDown}
  >
    {children}
  </div>
);

PlaybackRateBar.defaultProps = {
  onMouseDown: null,
};

PlaybackRateBar.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func,
  setPlaybackRate: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default PlaybackRateBar;
