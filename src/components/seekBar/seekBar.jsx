import React from 'react';
import PropTypes from 'prop-types';

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
  seekPercent: PropTypes.number.isRequired,
  setBar: PropTypes.func,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default SeekBar;
