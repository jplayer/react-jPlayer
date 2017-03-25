import React from 'react';
import expect from 'expect';
import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';
import getInitialStates from './getInitialStates';

const MockJPlayer = () => <div />;
const MockJPlayerTwo = () => <div />;

const connectMock = (JPlayer, options) => (
  class ConnectedMockJPlayer extends React.Component {
    static get options() {
      return options;
    }
    render() {
      return <JPlayer />;
    }
  }
);

const mockJPlayerOneOptions = {
  muted: true,
  id: 'MockJPlayer',
};

const mockJPlayerTwoOptions = {
  autoplay: true,
  id: 'MockJPlayerTwo',
};

describe('getInitialStates', () => {
  it('sets initial state correctly with one player', () => {
    const connectedMockJPlayer = connectMock(MockJPlayer, mockJPlayerOneOptions);
    const jPlayerInitialStates = getInitialStates(connectedMockJPlayer);

    expect(jPlayerInitialStates).toEqual({
      jPlayers: {
        MockJPlayer: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, mockJPlayerOneOptions),
      },
    });
  });

  it('sets initial state correctly with multiple players', () => {
    const connectedMockJPlayers = [
      connectMock(MockJPlayer, mockJPlayerOneOptions),
      connectMock(MockJPlayerTwo, mockJPlayerTwoOptions),
    ];
    const jPlayerInitialStates = getInitialStates(connectedMockJPlayers);

    expect(jPlayerInitialStates).toEqual({
      jPlayers: {
        MockJPlayer: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, mockJPlayerOneOptions),
        MockJPlayerTwo: merge({}, {
          ...internalStatus,
          ...defaultStatus,
          ...defaultOptions,
        }, mockJPlayerTwoOptions),
      },
    });
  });
});
