import expect from 'expect';

import { defaultStatus } from '../../util/constants';
import { __get__ } from './durationContainer';
import mockJPlayer from '../../util/mockData/mockJPlayer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};

describe('DurationContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, ...attributes });

    expect(stateProps).toEqual({
      children: defaultStatus.durationText,
      attributes,
    });
  });

  it('maps custom children if specified', () => {
    const children = '2:35';
    const stateProps = mapStateToProps({ jPlayers }, { id, children });

    expect(stateProps.children).toBe(children);
  });
});
