import React from 'react';

import { classes } from '../../util/constants';
import PlaybackRateBarValue from '../../components/controls/playbackRateBarValue';

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
  onMouseDown: () => null,
  children: (<PlaybackRateBarValue />),
};

PlaybackRateBar.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func,
  setPlaybackRate: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
};

export default PlaybackRateBar;
