import React from 'react';

import { classes } from '../../util/constants';

const SeekBar = ({ setSeekBar, onClick, onMouseDown,
  seekPercent, children, ...attributes }) => (
    <div
      {...attributes} ref={setSeekBar} className={classes.SEEK_BAR}
      style={{ width: `${seekPercent}%` }} onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
);

SeekBar.defaultProps = {
  onMouseDown: null,
};

SeekBar.propTypes = {
  setSeekBar: React.PropTypes.func.isRequired,
  seekPercent: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default SeekBar;
