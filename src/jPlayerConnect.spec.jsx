import expect from 'expect';

import { getJPlayers } from './util/common.spec';
import { defaultOptions, statusDefaultValues } from './util/constants';
import { __get__ } from './jPlayerConnect';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('JPlayerConnect', () => {
  it('maps state with custom props', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, test: 'test' });

    expect(expected).toEqual({
      ...defaultOptions,
      ...statusDefaultValues,
      test: 'test',
    });
  });

  it('custom props with same name as state get overwritten', () => {
    const expected = mapStateToProps(getJPlayers({ muted: false }), { uid, muted: true });

    expect(expected).toEqual({
      ...defaultOptions,
      ...statusDefaultValues,
      muted: true,
    });
  });
});
