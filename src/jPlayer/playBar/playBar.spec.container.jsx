import expect from 'expect';
import { setJPlayers } from '../../util/common.spec';
import { __get__ } from './playBar.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('PlayBarContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    expect(expected).toEqual({
      smoothPlayBar: false,
      currentPercentAbsolute: 0,
      currentPercentRelative: 0,
    });
  });
});
