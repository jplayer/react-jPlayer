import React from 'react';
import PropTypes from 'prop-types';

const JPlayer = ({ className, setJPlayer, children, onMouseMoveCapture, id, ...attributes }) => (
  <div
    id={id} className={className}
    ref={setJPlayer} draggable={false}
    onMouseMoveCapture={onMouseMoveCapture}
    {...attributes}
  >
    {children}
  </div>
);

JPlayer.defaultProps = {
  setJPlayer: null,
};

JPlayer.propTypes = {
  onMouseMoveCapture: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setJPlayer: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default JPlayer;
