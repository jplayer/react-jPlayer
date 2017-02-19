import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as jPlayerActions from './jPlayer/_actions/actions';

const mapStateToProps = (state, { uid, ...props }) => {
  const otherPlayers = {};

  Object.keys(state.jPlayers).forEach((key) => {
    if (key !== uid) {
      otherPlayers[key] = state.jPlayers[key];
    }
  });

  if (Object.keys(otherPlayers).length) {
    return {
      ...props,
      ...state.jPlayers[uid],
      jPlayers: otherPlayers,
    };
  }

  return {
    ...props,
    ...state.jPlayers[uid],
  };
};

const mapDispatchToProps = dispatch => ({ ...bindActionCreators(jPlayerActions, dispatch) });

const jPlayerConnect = (player) => {
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(player);

  // IE9 doesn't support fn.name
  const playerName = player.name === undefined ? player.toString().match(/^function\s*([^\s(]+)/)[1]
    : player.name;

  return class extends React.Component {
    static get uid() {
      return playerName;
    }
    static get options() {
      return player.options;
    }
    static get childContextTypes() {
      return {
        uid: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      uid: playerName,
    });
    render() {
      return <ConnectedPlayer uid={playerName} {...this.props} />;
    }
  };
};

export default jPlayerConnect;
