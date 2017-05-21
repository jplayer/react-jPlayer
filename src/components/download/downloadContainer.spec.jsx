import expect from 'expect';

import { defaultOptions, defaultStatus } from '../../util/constants';
import { __get__ } from './downloadContainer';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('DownloadContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const stateProps = mapStateToProps({ jPlayers }, { id });

    expect(stateProps).toEqual({
      free: defaultOptions.media.free,
      url: defaultStatus.src,
    });
  });
});
