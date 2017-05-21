import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const PlaybackRateBar = ({ onClick, onMouseDown, onTouchStart,
  setBar, children, ...attributes }) => (
    <div
      ref={setBar} className={classes.PLAYBACK_RATE_BAR}
      onClick={onClick} onMouseDown={onMouseDown}
      onTouchStart={onTouchStart} {...attributes}
    >
      {children}
    </div>
);

PlaybackRateBar.defaultProps = {
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  setBar: null,
};

PlaybackRateBar.propTypes = {
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  setBar: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default PlaybackRateBar;
