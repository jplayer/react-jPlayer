import React from 'react';
import PropTypes from 'prop-types';

import Bar from '../barContainer';
import { classes } from '../../util/constants';

const SeekBar = props => (
  <Bar
    clickMoveBar={props.clickMoveBar}
    touchMoveBar={props.touchMoveBar}
  >
    <div
      className={classes.SEEK_BAR}
      style={{ width: `${props.seekPercent}%` }}
    >
      {props.children}
    </div>
  </Bar>
);

SeekBar.defaultProps = {
  children: null,
};

SeekBar.propTypes = {
  seekPercent: PropTypes.number.isRequired,
  clickMoveBar: PropTypes.func.isRequired,
  touchMoveBar: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default SeekBar;
