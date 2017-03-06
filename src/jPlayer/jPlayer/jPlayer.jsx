import React from 'react';

import { defaultOptions } from '../../util/constants';
import KeyControl from '../keyControl/keyControlContainer';

const JPlayer = ({ keyEnabled, setJPlayer, children, ...attributes }) => (
  <div {...attributes} ref={setJPlayer} draggable={false}>
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
