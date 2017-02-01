/* eslint react/prefer-stateless-function: 0 */
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

  return class extends React.Component {
    static get uid() {
      return player.name;
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
      uid: player.name,
    });
    render() {
      return <ConnectedPlayer uid={player.name} {...this.props} />;
    }
  };
};

export default jPlayerConnect;
