import React from 'react';
import { Motion, spring } from 'react-motion';

import { classes, statusDefaultValues } from '../../util/constants';

const Gui = ({ onMouseEnter, guiFadeOut, ...attributes }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: spring(guiFadeOut ? 0 : 1, [250]) }}
  >
    {values => (
      <div
        {...attributes} className={classes.GUI}
        style={{ opacity: values.opacity }}
        onMouseEnter={onMouseEnter}
      />
      )
    }
  </Motion>
);

Gui.defaultProps = {
  onMouseEnter: null,
  guiFadeOut: statusDefaultValues.guiFadeOut,
};

Gui.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  onMouseEnter: React.PropTypes.func,
  guiFadeOut: React.PropTypes.bool,
};

export default Gui;
