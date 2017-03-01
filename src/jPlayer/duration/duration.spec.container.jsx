import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './duration.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('DurationContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    expect(expected).toEqual({
      children: statusDefaultValues.durationText,
    });
  });

  it('maps custom children if specified', () => {
    const children = '2:35';
    const expected = mapStateToProps(setJPlayers(), { uid, children });

    expect(expected.children).toBe(children);
  });
});
