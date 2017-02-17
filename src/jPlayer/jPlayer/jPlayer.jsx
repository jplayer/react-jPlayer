import React from 'react';


import { defaultOptions } from '../../util/constants';
import KeyControl from '../keyControl/keyControl.container';

/* Stops the user being able to drag the jPlayer
  and see a ghost image */
const preventDragging = e => e.preventDefault();

const JPlayer = ({ keyEnabled, setJPlayer, children, ...attributes }) => (
  <div {...attributes} ref={setJPlayer} onMouseDown={preventDragging}>
    {children}
    {keyEnabled && <KeyControl />}
  </div>
);

JPlayer.propTypes = {
  setJPlayer: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  keyEnabled: React.PropTypes.bool,
};

JPlayer.defaultProps = {
  keyEnabled: defaultOptions.keyEnabled,
  setJPlayer: null,
};

export default JPlayer;
