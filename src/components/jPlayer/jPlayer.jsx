import React from 'react';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';
import ScreenFull from './screenFull/screenFullContainer';
import ErrorLogger from './errorLogger/errorLoggerContainer';
import TimeDisplay from './timeDisplay/timeDisplayContainer';

const JPlayer = (props) => {
  const { className, keyBindings, children,
    onMouseMoveCapture, id, ...attributes } = props;

  return (
    <div
      id={id}
      className={className}
      draggable={false}
      onMouseMoveCapture={onMouseMoveCapture}
      {...attributes}
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
  children: PropTypes.node.isRequired,
};

export default JPlayer;
