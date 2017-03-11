import React from 'react';
import expect from 'expect';
import merge from 'lodash.merge';

import { defaultOptions, statusDefaultValues } from '../util/constants';
import getInitialStates from './getInitialStates';

const MockPlayer = () => <div />;
const MockPlayerTwo = () => <div />;

MockPlayer.options = {
  muted: true,
};
MockPlayer.uid = MockPlayer.name;

MockPlayerTwo.options = {
  autoplay: true,
};
MockPlayerTwo.uid = MockPlayerTwo.name;

describe('getInitialStates', () => {
  it('sets initial state correctly with one player', () => {
    const jPlayerInitialStates = getInitialStates(MockPlayer);

    expect(jPlayerInitialStates).toEqual({
      MockPlayer: merge({}, {
        ...statusDefaultValues,
        ...defaultOptions,
        id: MockPlayer.uid,
      }, MockPlayer.options),
    });
  });

  it('sets initial state correctly with multiple players', () => {
    const jPlayerInitialStates = getInitialStates([MockPlayer, MockPlayerTwo]);

    expect(jPlayerInitialStates).toEqual({
      MockPlayer: merge({}, {
        ...statusDefaultValues,
        ...defaultOptions,
        id: MockPlayer.uid,
      }, MockPlayer.options),
      MockPlayerTwo: merge({}, {
        ...statusDefaultValues,
        ...defaultOptions,
        id: MockPlayerTwo.uid,
      }, MockPlayerTwo.options),
    });
  });
});
