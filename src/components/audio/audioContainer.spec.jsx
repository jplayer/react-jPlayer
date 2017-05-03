import React from 'react';
import expect from 'expect';

import { __get__ } from './audioContainer';
import { events } from './audio.spec';
import mockJPlayer from '../../util/mockData/mockJPlayer';

const mapStateToProps = __get__('mapStateToProps');
const attributes = {
  'data-test': 'test',
};
const children = <div />;
const id = 'jPlayer-1';

describe('AudioContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, events, children, ...attributes });

    expect(stateProps).toEqual({
      require: true,
      events,
      children,
      attributes,
    });
  });
});
