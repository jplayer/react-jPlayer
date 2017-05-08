import expect from 'expect';

import { defaultStatus } from '../../util/constants';
import { __get__ } from './browserUnsupportedContainer';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';

describe('BrowserUnsupportedContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  it('maps state', () => {
    const expected = mapStateToProps({ jPlayers }, { id });

    expect(expected).toEqual({
      foundSupported: defaultStatus.mediaSettings.foundSupported,
    });
  });
});
