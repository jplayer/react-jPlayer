import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultStatus } from '../../util/constants';
import { __get__ } from './durationContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};

describe('DurationContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      children: defaultStatus.durationText,
      ...attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, ...attributes }, dispatch, { id });

    expect(expected).toEqual({
      ...stateProps,
      ...attributes,
    });
  });

  it('maps custom children if specified', () => {
    const children = '2:35';
    const expected = mapStateToProps(getJPlayers(), { id, children });

    expect(expected.children).toBe(children);
  });
});
