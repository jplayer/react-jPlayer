import React from 'react';

import { classes } from '../../util/constants';

const SeekBar = ({ setBar, onClick, onMouseDown, onTouchStart,
  seekPercent, ...attributes }) => (
    <div
      ref={setBar} className={classes.SEEK_BAR}
      style={{ width: `${seekPercent}%` }} onClick={onClick}
      onTouchStart={onTouchStart} onMouseDown={onMouseDown}
      {...attributes}
    />
);

SeekBar.defaultProps = {
  setBar: null,
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
};

SeekBar.propTypes = {
  seekPercent: React.PropTypes.number.isRequired,
  setBar: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onTouchStart: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
};

export default SeekBar;
