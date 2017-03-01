import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { __get__ } from './poster.container';

const mapStateToProps = __get__('mapStateToProps');

describe('PosterContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid: 'jPlayer-1' });

    expect(expected).toEqual({
      src: '',
    });
  });
});
