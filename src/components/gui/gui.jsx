import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const motion = (values, onMouseMove, attributes) => (
  <div
    className={classes.GUI} onMouseMove={onMouseMove}
    style={{
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : '',
    }}
    {...attributes}
  />
);

const Gui = ({ fullScreen, guiFadeOut, onMouseMove, ...attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: fullScreen ? spring(guiFadeOut ? 0 : 1, [250]) : 1 }}
  >
    {values => motion(values, onMouseMove, attributes)}
  </Motion>
);

Gui.propTypes = {
  onMouseMove: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  guiFadeOut: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default Gui;
