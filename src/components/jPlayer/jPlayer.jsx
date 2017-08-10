import React from 'react';
import PropTypes from 'prop-types';

const JPlayer = ({ className, setJPlayer, children, id, ...attributes }) => (
  <div id={id} className={className} ref={setJPlayer} draggable={false} {...attributes}>
    {children}
  </div>
);

JPlayer.defaultProps = {
  setJPlayer: null,
};

JPlayer.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setJPlayer: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default JPlayer;
