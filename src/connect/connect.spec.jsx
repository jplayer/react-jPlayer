import expect from 'expect';

import jPlayerConnect from './connect';
import mockJPlayerOptions from '../util/mockData/mockJPlayerOptions';

const mockJPlayer = () => null;

describe('connect', () => {
  it('connects jPlayer correctly', () => {
    const connectedJPlayer = jPlayerConnect(mockJPlayer, mockJPlayerOptions);

    expect(connectedJPlayer.jPlayer).toEqual(mockJPlayer);
    expect(connectedJPlayer.options).toEqual(mockJPlayerOptions);
  });
});
