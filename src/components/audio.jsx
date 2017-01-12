import React from 'react';

const Audio = ({ children, setCurrentMedia, attributes }) => (
  <audio {...attributes} ref={setCurrentMedia} title="hello">
    {children}
  </audio>
);

Audio.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  setCurrentMedia: React.PropTypes.func,
};

export default Audio;
