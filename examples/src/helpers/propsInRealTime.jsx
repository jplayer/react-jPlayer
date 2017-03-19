import React from 'react';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';
import { actions } from 'react-jplayer';
import { defaultOptions, defaultStatus } from 'react-jplayer/lib/util/constants';
import 'react-json-pretty/JSONPretty.monikai.styl';

const mapStateToProps = ({ jPlayers }, { id }) => {
  const newJPlayers = {};
  const actionsAsStrings = {};

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

  const { [id]: jPlayer, ...otherPlayers } = newJPlayers;

  Object.keys(actions).forEach((jPlayerActionKey) => {
    actionsAsStrings[jPlayerActionKey] = 'function';
  });

  const returnedJPlayers = {
    id,
    ...actionsAsStrings,
    ...jPlayer,
  };

  if (Object.keys(otherPlayers).length) {
    returnedJPlayers.jPlayers = otherPlayers;
  }

  return returnedJPlayers;
};

const PropsInRealTime = props => (
  <div className="col-md-4">
    <h2>jPlayer Props</h2>
    <p>Properties that get passed into your players through props</p>
    <JSONPretty json={props} />
  </div>
);

export default connect(mapStateToProps)(PropsInRealTime);
