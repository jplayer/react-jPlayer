import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Gui from './gui';

const Animation = ({ fullScreen, guiFadeOut, onMouseMove, children }) => (
  <Motion
    defaultStyle={{ opacity: 1 }}
    style={{ opacity: fullScreen ? spring(guiFadeOut ? 0 : 1, [250]) : 1 }}
  >
    {values => (
      <Gui opacity={values.opacity} onMouseMove={onMouseMove}>
        {children}
      </Gui>
    )}
  </Motion>
);

Animation.propTypes = {
  onMouseMove: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  guiFadeOut: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default Animation;
