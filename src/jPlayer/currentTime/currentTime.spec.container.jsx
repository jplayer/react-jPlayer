import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './currentTime.container';

const mapStateToProps = __get__('mapStateToProps');

describe('CurrentTimeContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid: 'jPlayer-1' });

    expect(expected).toEqual({
      children: statusDefaultValues.currentTimeText,
    });
  });

  it('maps custom children if specified', () => {
    const children = '0:20';
    const expected = mapStateToProps(setJPlayers(), { uid: 'jPlayer-1', children });

    expect(expected.children).toBe(children);
  });
});
