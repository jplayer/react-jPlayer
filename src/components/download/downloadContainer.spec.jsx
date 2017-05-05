import expect from 'expect';

import { defaultOptions, defaultStatus } from '../../util/constants';
import { __get__ } from './downloadContainer';
import mockJPlayer from '../../util/mockData/mockJPlayer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = 'test';

describe('DownloadContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayer,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id, children, ...attributes });

    expect(stateProps).toEqual({
      free: defaultOptions.media.free,
      url: defaultStatus.src,
      children,
      attributes,
    });
  });
});
