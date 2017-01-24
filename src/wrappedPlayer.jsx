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
      // id: React.PropTypes.number,
      player: React.PropTypes.func.isRequired,
    };
  }
  static get childContextTypes() {
    return {
      id: React.PropTypes.number,
    };
  }
  constructor(props) {
    super(props);

    this.initialState = {
      jPlayers: {},
    };
    this.props.players.forEach((player) => { 
      this.initialState.jPlayers[player.id] = {
        ...merge({}, statusDefaultValues, defaultOptions, player.options),
      };
    });
  }
  render() {
    const { player, ...props } = this.props; // eslint-disable-line no-unused-vars

    return (
      <Provider store={createStore(jPlayerReducers, this.initialState)}>
        {this.props.children}
      </Provider>
    );
  }
}

export default WrappedPlayer;
