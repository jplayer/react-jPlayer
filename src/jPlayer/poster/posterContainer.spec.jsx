import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './posterContainer';

const mapStateToProps = __get__('mapStateToProps');

describe('PosterContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid: 'jPlayer-1' });

    expect(expected).toEqual({
      src: '',
    });
  });
});
