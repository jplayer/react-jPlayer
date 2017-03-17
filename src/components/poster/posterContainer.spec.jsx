import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './posterContainer';

const mapStateToProps = __get__('mapStateToProps');
const attributes = {
  'data-test': 'test',
};
const id = 'jPlayer-1';

describe('PosterContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      src: '',
      attributes,
    });
  });
});
