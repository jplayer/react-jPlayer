import React from 'react';

import { classes } from '../../util/constants';

const PlaybackRateBar = ({ onClick, onMouseDown, onTouchStart,
  setBar, children, attributes }) => (
    <div
      {...attributes} ref={setBar}
      className={classes.PLAYBACK_RATE_BAR} onClick={onClick}
      onMouseDown={onMouseDown} onTouchStart={onTouchStart}
    >
      {children}
    </div>
);

PlaybackRateBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null,
  attributes: null,
};

PlaybackRateBar.propTypes = {
  attributes: React.PropTypes.node,
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onTouchStart: React.PropTypes.func,
  setBar: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
};

export default PlaybackRateBar;
