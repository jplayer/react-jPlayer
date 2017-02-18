import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes } from '../../util/constants';

const Gui = ({ fullScreen, guiFadeOut, ...attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: fullScreen ? spring(guiFadeOut ? 0 : 1, [250]) : 1 }}
  >
    {values => (
      <div
        {...attributes} className={classes.GUI}
        style={{
          opacity: values.opacity,
          display: values.opacity === 0 ? 'none' : '',
        }}
      />
      )
    }
  </Motion>
);

Gui.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  guiFadeOut: React.PropTypes.bool.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
};

export default Gui;
