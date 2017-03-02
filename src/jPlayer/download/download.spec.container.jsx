import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, statusDefaultValues } from '../../util/constants';
import { __get__ } from './download.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('DownloadContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      free: defaultOptions.media.free,
      url: statusDefaultValues.src,
    });
  });
});
