import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../../util/constants';

const motion = (values, onMouseEnter, children, attributes) => (
  <div
    {...attributes} className={classes.GUI}
    onMouseEnter={onMouseEnter}
    style={{
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : '',
    }}
  >
    {children}
  </div>
);

const Gui = ({ fullScreen, guiFadeOut, onMouseEnter, children, attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: fullScreen ? spring(guiFadeOut ? 0 : 1, [250]) : 1 }}
  >
    {values => motion(values, onMouseEnter, children, attributes)}
  </Motion>
);

Gui.defaultProps = {
  attributes: {},
};

Gui.propTypes = {
  attributes: React.PropTypes.node,
  onMouseEnter: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  guiFadeOut: React.PropTypes.bool.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
};

export default Gui;
