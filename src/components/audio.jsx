import React from 'react';

const Audio = ({ children, setCurrentMedia, ...attributes }) => (
  <audio {...attributes} ref={setCurrentMedia}>
    {children}
  </audio>
);

Audio.defaultProps = {
  children: null,
  setCurrentMedia: null,
};

Audio.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  setCurrentMedia: React.PropTypes.func,
};

export default Audio;
