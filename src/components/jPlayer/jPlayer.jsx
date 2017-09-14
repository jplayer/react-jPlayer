/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';
import ScreenFull from './screenFull/screenFullContainer';
import ErrorLogger from './errorLogger/errorLoggerContainer';
import TimeDisplay from './timeDisplay/timeDisplayContainer';

const JPlayer = (props) => {
  const { className, keyBindings, children,
    onMouseMoveCapture, id } = props;

  return (
    <div
      id={id}
      className={className}
      draggable={false}
      onMouseMoveCapture={onMouseMoveCapture}
    >
      <KeyControl keyBindings={keyBindings} />
      <TimeDisplay />
      <ScreenFull />
      <ErrorLogger />
      {children}
    </div>
  );
};

JPlayer.defaultProps = {
  keyBindings: null,
};

JPlayer.propTypes = {
  keyBindings: PropTypes.object,
  onMouseMoveCapture: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default JPlayer;
