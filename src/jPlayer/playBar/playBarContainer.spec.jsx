import expect from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './playBarContainer';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('PlayBarContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      smoothPlayBar: false,
      currentPercentAbsolute: 0,
      currentPercentRelative: 0,
    });
  });
});
