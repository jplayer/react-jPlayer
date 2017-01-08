import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as jPlayerActions from './actions/jPlayerActions';

const mapStateToProps = (state, { id }) => {
  const otherPlayers = {};

  Object.keys(state.jPlayers).forEach((key) => {
    if (key !== id) {
      otherPlayers[key] = state.jPlayers[key];
    }
  });

  if (Object.keys(otherPlayers).length) {
    return {
      ...state.jPlayers[id],
      jPlayers: otherPlayers,
    };
  }

  return {
    ...state.jPlayers[id],
  };
};

const mapDispatchToProps = dispatch => (
  {
    functions: bindActionCreators(jPlayerActions, dispatch),
  }
);

class WrappedPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string,
      children: React.PropTypes.element,
    };
  }
  static get childContextTypes() {
    return {
      id: React.PropTypes.string,
    };
  }
  constructor(props) {
    super(props);

    const childElement = React.Children.only(this.props.children).type;

    this.ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(childElement);
  }
  getChildContext = () => ({
    id: this.props.id,
  });
  render() {
    const ConnectedPlayer = this.ConnectedPlayer;

    return <ConnectedPlayer id={this.props.id} />;
  }
}

export default WrappedPlayer;
