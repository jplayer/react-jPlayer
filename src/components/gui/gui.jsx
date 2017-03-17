import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../../util/constants';

const motion = (values, onMouseMove, attributes) => (
  <div
    {...attributes} className={classes.GUI}
    onMouseMove={onMouseMove}
    style={{
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : '',
    }}
  />
);

// TODO: onMouseEnter instead of mouseMove?
const Gui = ({ fullScreen, guiFadeOut, onMouseMove, ...attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: fullScreen ? spring(guiFadeOut ? 0 : 1, [250]) : 1 }}
  >
    {values => motion(values, onMouseMove, attributes)}
  </Motion>
);

Gui.propTypes = {
  onMouseMove: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  guiFadeOut: React.PropTypes.bool.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
};

export default Gui;
