import expect from 'expect';

import { defaultStatus } from '../../util/constants';
import { __get__ } from './currentTimeContainer';
import mockJPlayer from '../../util/mockData/mockJPlayer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = '0:20';

describe('CurrentTimeContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, ...attributes });

    expect(stateProps).toEqual({
      children: defaultStatus.currentTimeText,
      attributes,
    });
  });

  it('maps custom children if specified', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, children });

    expect(stateProps.children).toBe(children);
  });
});
