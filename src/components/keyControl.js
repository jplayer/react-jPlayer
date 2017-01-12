import React from 'react';

import { keyIgnoreElementNames } from '../util/constants';

class KeyControl extends React.Component {
  static get propTypes() {
    return {
      focus: React.PropTypes.bool,
    };
  }
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = (event) => {
    if (keyIgnoreElementNames.some(name => name.toUpperCase()
          === event.target.nodeName.toUpperCase()) || !this.props.focus) {
      return;
    }
    Object.keys(this.keyBindings).forEach((key) => {
      const keyBinding = this.keyBindings[key];

      if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
        event.preventDefault();
        keyBinding.fn();
      }
    });
  }
  render() {
    return null;
  }
}

export default KeyControl;
