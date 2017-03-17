import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultStatus } from '../../util/constants';
import { __get__ } from './currentTimeContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = '0:20';

describe('CurrentTimeContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      children: defaultStatus.currentTimeText,
      attributes,
    });
  });

  it('maps custom children if specified', () => {
    const expected = mapStateToProps(getJPlayers(), { id: 'jPlayer-1', children });

    expect(expected.children).toBe(children);
  });
});
