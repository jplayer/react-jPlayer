import expect from 'expect';

import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import { __get__ } from './posterContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('PosterContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const expected = mapStateToProps({ jPlayers }, { id });

    expect(expected).toEqual({
      src: '',
    });
  });
});
