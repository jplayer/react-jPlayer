import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { __get__ } from './videoContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('VideoContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      require: false,
    });
  });
});
