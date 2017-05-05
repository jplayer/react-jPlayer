import expect from 'expect';

import { __get__ } from './audioContainer';
import mockJPlayer from '../../util/mockData/mockJPlayer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('AudioContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      require: true,
    });
  });
});
