import React from 'react';

const Audio = ({ children, setCurrentMedia, ...attributes }) => (
  <audio ref={setCurrentMedia} {...attributes}>
    {children}
  </audio>
);

Audio.propTypes = {
  children: React.PropTypes.element,
  setCurrentMedia: React.PropTypes.func,
};

export default Audio;
