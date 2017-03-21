import React from 'react';
import expect from 'expect';
import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';
import getInitialStates from './getInitialStates';

const MockJPlayer = () => <div />;
const MockJPlayerTwo = () => <div />;

const connectMock = JPlayer => (
  class ConnectedMockJPlayer extends React.Component {
    static get jPlayer() {
      return JPlayer;
    }
    render() {
      return <JPlayer />;
    }
  }
);

MockJPlayer.options = {
  muted: true,
  id: 'MockJPlayer',
};

MockJPlayerTwo.options = {
  autoplay: true,
  id: 'MockJPlayerTwo',
};

describe('getInitialStates', () => {
  it('sets initial state correctly with one player', () => {
    const connectedMockJPlayer = connectMock(MockJPlayer);
    const jPlayerInitialStates = getInitialStates(connectedMockJPlayer);

    expect(jPlayerInitialStates).toEqual({
      jPlayers: {
        MockJPlayer: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, connectedMockJPlayer.jPlayer.options),
      },
    });
  });

  it('sets initial state correctly with multiple players', () => {
    const connectedMockJPlayers = [
      connectMock(MockJPlayer),
      connectMock(MockJPlayerTwo),
    ];
    const jPlayerInitialStates = getInitialStates(connectedMockJPlayers);

    expect(jPlayerInitialStates).toEqual({
      jPlayers: {
        MockJPlayer: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, connectedMockJPlayers[0].jPlayer.options),
        MockJPlayerTwo: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, connectedMockJPlayers[1].jPlayer.options),
      },
    });
  });
});
