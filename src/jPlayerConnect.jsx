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

const jPlayerConnect = (jPlayer) => {
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(jPlayer);

  // IE9 doesn't support fn.name
  const playerName = jPlayer.name === undefined ? jPlayer.toString().match(/^function\s*([^\s(]+)/)[1]
    : jPlayer.name;

  return class extends React.Component {
    static get uid() {
      return playerName;
    }
    static get options() {
      return jPlayer.options;
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
