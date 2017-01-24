/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as jPlayerActions from './actions/jPlayerActions';

const mapStateToProps = (state, { id, ...props }) => {
  const otherPlayers = {};

  Object.keys(state.jPlayers).forEach((key) => {
    if (key !== id) {
      otherPlayers[key] = state.jPlayers[key];
    }
  });

  if (Object.keys(otherPlayers).length) {
    return {
      ...props,
      ...state.jPlayers[id],
      jPlayers: otherPlayers,
    };
  }

  return {
    ...props,
    ...state.jPlayers[id],
  };
};

const mapDispatchToProps = dispatch => ({ ...bindActionCreators(jPlayerActions, dispatch) });

const jPlayerConnect = (player) => {
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(player);

  return class extends React.Component {
    static get id() {
      return player.name;
    }
    static get options() {
      return player.options;
    }
    static get childContextTypes() {
      return {
        id: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: player.name,
    });
    render() {
      return <ConnectedPlayer id={player.name} />;
    }
  };
};

export default jPlayerConnect;
