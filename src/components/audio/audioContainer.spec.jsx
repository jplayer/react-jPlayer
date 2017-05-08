import expect from 'expect';

import { __get__ } from './audioContainer';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('AudioContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      require: true,
    });
  });
});
