import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';
import mockCanvasContext from '../../util/specHelpers/mockData/mockCanvasContext.spec';
import { setOption } from '../../actions/actions';

proxyquire.noCallThru();

let canvas;
const id = 'TestPlayer';
const bufferedTimeRanges = [
  { start: 0, end: 2 },
  { start: 2, end: 4 },
];
const mockBufferBar = ({ setCanvas }) => {
  const mockSetCanvas = (ref) => {
    if (ref !== null) {
      expect.spyOn(ref, 'getContext').andReturn(mockCanvasContext);
    }
    setCanvas(ref);
    canvas = ref;
  };

  return (
    <canvas ref={mockSetCanvas} />
  );
};
const BufferBarContainer = proxyquire('./bufferBarContainer', {
  './bufferBar': mockBufferBar,
}).default;
const setup = (jPlayers, props) => containerSetup(BufferBarContainer, jPlayers, props);

describe('BufferBarContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  describe('clearBuffer', () => {
    it('clears the buffer canvas if nothing in the buffer', () => {
      jPlayers[id].bufferedTimeRanges = bufferedTimeRanges;

      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'bufferedTimeRanges', []));

      expect(mockCanvasContext.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    });
  });

  describe('fillBufferPartially', () => {
    const duration = 22;
    const bufferColour = '#00';

    it('fills buffer bar if buffering', () => {
      jPlayers[id].duration = duration;
      jPlayers[id].bufferColour = bufferColour;

      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'bufferedTimeRanges', bufferedTimeRanges));

      expect(mockCanvasContext.fillRect.calls.length).toBe(bufferedTimeRanges.length);
      expect(mockCanvasContext.fillStyle).toBe(jPlayers[id].bufferColour);
    });

    it('doesnt fill the buffer bar if values are same as previous render', () => {
      jPlayers[id].duration = duration;
      jPlayers[id].bufferColour = bufferColour;
      jPlayers[id].bufferedTimeRanges = bufferedTimeRanges;

      const { store } = setup(jPlayers);

      store.dispatch(setOption(id, 'bufferedTimeRanges', bufferedTimeRanges));

      expect(mockCanvasContext.fillRect).toNotHaveBeenCalled();
    });
  });


  afterEach(() => {
    mockCanvasContext.resetSpies();
  });
});
