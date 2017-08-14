import React from 'react';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';
import ScreenFull from './screenFull/screenFullContainer';
import ErrorLogger from './errorLogger/errorLoggerContainer';

const JPlayer = ({ className, keyBindings, setJPlayer, children,
  onMouseMoveCapture, id, ...attributes }) => (
  <div
    id={id}
    className={className}
    ref={setJPlayer}
    draggable={false}
    onMouseMoveCapture={onMouseMoveCapture}
    {...attributes}
  >
    <KeyControl keyBindings={keyBindings} />
    <ScreenFull />
    <ErrorLogger />
    {children}
  </div>
);

JPlayer.defaultProps = {
  setJPlayer: null,
};

JPlayer.propTypes = {
  keyBindings: PropTypes.object.isRequired,
  onMouseMoveCapture: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setJPlayer: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default JPlayer;
