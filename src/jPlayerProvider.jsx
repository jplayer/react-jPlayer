import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import merge from 'lodash.merge';

import jPlayerReducer from './jPlayer/_reducer/reducer';
import { defaultOptions, statusDefaultValues } from './util/constants';

const reducers = combineReducers({ jPlayers: jPlayerReducer });

class jPlayerProvider extends React.Component {
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
      this.initialState.jPlayers[jPlayer.uid] = {
        ...merge({}, statusDefaultValues, defaultOptions, jPlayer.options),
        id: jPlayer.uid,
      };
    });

    this.store = createStore(reducers, this.initialState);
  }
  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default jPlayerProvider;
