import React from 'react';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/JSONPretty.monikai.styl';
import { defaultOptions, defaultStatus } from '../../../src/util/constants';

import * as jPlayerActions from '../../../src/actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => {
  const newJPlayers = {};

  Object.keys(jPlayers).forEach((jPlayerKey) => {
    const jPlayer = jPlayers[jPlayerKey];
    const jPlayerActionsAsStrings = {};
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

    Object.keys(jPlayerActions).forEach((jPlayerActionKey) => {
      jPlayerActionsAsStrings[jPlayerActionKey] = 'function';
    });

    newJPlayers[jPlayerKey] = {
      ...jPlayerActionsAsStrings,
      options,
      status,
    };
  });

  const { [id]: jPlayer, ...otherPlayers } = newJPlayers;

  const returnedJPlayers = {
    ...jPlayer,
  };

  if (Object.keys(otherPlayers).length) {
    returnedJPlayers.jPlayers = otherPlayers;
  }

  return returnedJPlayers;
};

const mergeProps = stateProps => ({ ...stateProps });

const PropsInRealTime = props => (
  <div className="col-md-4">
    <h2>jPlayer Props</h2>
    <p>Properties that get passed into your players through props</p>
    <JSONPretty json={props} />
  </div>
);

export default connect(mapStateToProps, null, mergeProps)(PropsInRealTime);
