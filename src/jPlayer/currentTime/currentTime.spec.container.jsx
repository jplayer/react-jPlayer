import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './currentTime.container';

const mapStateToProps = __get__('mapStateToProps');
const state = {
  currentTimeText: statusDefaultValues.currentTimeText,
};

describe('CurrentTimeContainer', () => {
  it('maps current time to children if none specified', () => {
    const expected = mapStateToProps(setJPlayers(state), { uid: 'jPlayer-1' });

    expect(expected.children).toBe(state.currentTimeText);
  });

  it('maps custom children if specified', () => {
    const children = 30;
    const expected = mapStateToProps(setJPlayers(state), { uid: 'jPlayer-1', children });

    expect(expected.children).toBe(children);
  });
});
