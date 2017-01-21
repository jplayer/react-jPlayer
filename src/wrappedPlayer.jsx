import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './less/default/jPlayer.less';
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

class WrappedPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      player: React.PropTypes.func.isRequired,
    };
  }
  static get childContextTypes() {
    return {
      id: React.PropTypes.string,
    };
  }
  constructor(props) {
    super(props);

    this.ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(this.props.player);
  }
  getChildContext = () => ({
    id: this.props.id,
  });
  render() {
    const { id, player, ...props } = this.props; // eslint-disable-line no-unused-vars
    const ConnectedPlayer = this.ConnectedPlayer;

    return <ConnectedPlayer id={id} {...props} />;
  }
}

export default WrappedPlayer;
