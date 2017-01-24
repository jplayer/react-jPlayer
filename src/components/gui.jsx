import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes, statusDefaultValues } from '../util/constants';

const Gui = ({ onMouseEnter, guiFadeOut, children, ...attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: spring(guiFadeOut ? 0 : 1, [250]) }}
  >
    {values => (
      <div
        {...attributes} className={classes.GUI}
        style={{ opacity: values.opacity }}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </div>
      )
    }
  </Motion>
);

Gui.defaultProps = {
  onMouseEnter: Function.prototype,
  guiFadeOut: statusDefaultValues.guiFadeOut,
};

Gui.propTypes = {
  onMouseEnter: React.PropTypes.func,
  guiFadeOut: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

export default Gui;
