import React from 'react';
import PropTypes from 'prop-types';

const JPlayer = ({ setJPlayer, children, ...attributes }) => (
  <div ref={setJPlayer} draggable={false} {...attributes}>
    {children}
  </div>
);

JPlayer.defaultProps = {
  setJPlayer: null,
};

JPlayer.propTypes = {
  setJPlayer: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default JPlayer;
