import expect from 'expect';

import { defaultStatus } from '../../util/constants';
import { __get__ } from './durationContainer';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('DurationContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      children: defaultStatus.durationText,
    });
  });

  it('maps custom children if specified', () => {
    const children = '2:35';
    const stateProps = mapStateToProps({ jPlayers }, { id, children });

    expect(stateProps.children).toBe(children);
  });
});
