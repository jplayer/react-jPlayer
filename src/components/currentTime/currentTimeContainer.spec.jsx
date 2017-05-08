import expect from 'expect';

import { defaultStatus } from '../../util/constants';
import { __get__ } from './currentTimeContainer';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const children = '0:20';

describe('CurrentTimeContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      children: defaultStatus.currentTimeText,
    });
  });

  it('maps custom children if specified', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, children });

    expect(stateProps.children).toBe(children);
  });
});
