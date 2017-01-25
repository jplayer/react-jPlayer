import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import merge from 'lodash.merge';

import './less/default/jPlayer.less';
import jPlayerReducers from './reducers';
import { defaultOptions, statusDefaultValues } from './util/constants';

class WrappedPlayer extends React.Component {
  static get propTypes() {
    return {
      jPlayers: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.func),
        React.PropTypes.func,
      ]).isRequired,
      children: React.PropTypes.element.isRequired,
    };
  }
  constructor(props) {
    super(props);

    this.initialState = {
      jPlayers: {},
    };
    let jPlayers = props.jPlayers;

    if (!Array.isArray(jPlayers)) {
      jPlayers = [jPlayers];
    }

    jPlayers.forEach((jPlayer) => {
      this.initialState.jPlayers[jPlayer.id] = {
        ...merge({}, statusDefaultValues, defaultOptions, jPlayer.options),
      };
    });

    this.store = createStore(jPlayerReducers, this.initialState);
  }
  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default WrappedPlayer;
