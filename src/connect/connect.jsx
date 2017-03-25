import React from 'react';
import { connect } from 'react-redux';

import { defaultOptions, defaultStatus } from '../util/constants';
import { setOption, setMedia, clearMedia, play, pause, setPlayHead,
  setVolume, setMute, focus } from '../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, ...props }) => {
  const newJPlayers = {};

  Object.keys(jPlayers).forEach((jPlayerKey) => {
    const jPlayer = jPlayers[jPlayerKey];
    const options = {};
    const status = {};

    Object.keys(defaultOptions).forEach((key) => {
      if (jPlayer[key] !== undefined) {
        options[key] = jPlayer[key];
      }
    });

    Object.keys(defaultStatus).forEach((key) => {
      if (jPlayer[key] !== undefined) {
        status[key] = jPlayer[key];
      }
    });

    newJPlayers[jPlayerKey] = {
      options,
      status,
    };
  });

  const { [id]: jPlayer, ...otherJPlayers } = newJPlayers;

  const returnedJPlayers = {
    ...props,
    ...jPlayer,
    id,
  };

  if (Object.keys(otherJPlayers).some(otherJPlayer => otherJPlayer)) {
    returnedJPlayers.jPlayers = otherJPlayers;
  }

  return returnedJPlayers;
};

const mapDispatchToProps = {
  setOption,
  setMedia,
  clearMedia,
  play,
  pause,
  setPlayHead,
  setVolume,
  setMute,
  focus,
};

const Connect = (jPlayer, options) => {
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(jPlayer);

  return class ConnectedJPlayer extends React.Component {
    static get jPlayer() {
      return jPlayer;
    }
    static get options() {
      return options;
    }
    static get childContextTypes() {
      return {
        id: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: options.id,
    });
    render() {
      return <ConnectedPlayer id={options.id} {...this.props} />;
    }
  };
};

export default Connect;
