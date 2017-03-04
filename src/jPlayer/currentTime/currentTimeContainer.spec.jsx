import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './currentTimeContainer';

const mapStateToProps = __get__('mapStateToProps');

describe('CurrentTimeContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid: 'jPlayer-1' });

    expect(expected).toEqual({
      children: statusDefaultValues.currentTimeText,
    });
  });

  it('maps custom children if specified', () => {
    const children = '0:20';
    const expected = mapStateToProps(getJPlayers(), { uid: 'jPlayer-1', children });

    expect(expected.children).toBe(children);
  });
});
