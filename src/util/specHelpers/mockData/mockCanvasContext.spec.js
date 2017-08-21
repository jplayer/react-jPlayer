import { isSpy, createSpy } from 'expect';

const mockCanvasContext = {
  fillRect: createSpy(),
  clearRect: createSpy(),
  getImageData: createSpy().andReturn([]),
  putImageData: createSpy(),
  createImageData: createSpy().andReturn([]),
  setTransform: createSpy(),
  drawImage: createSpy(),
  save: createSpy(),
  fillText: createSpy(),
  restore: createSpy(),
  beginPath: createSpy(),
  moveTo: createSpy(),
  lineTo: createSpy(),
  closePath: createSpy(),
  stroke: createSpy(),
  translate: createSpy(),
  scale: createSpy(),
  rotate: createSpy(),
  arc: createSpy(),
  fill: createSpy(),
  resetSpies: () => Object.values(mockCanvasContext).forEach((spy) => {
    if (isSpy(spy)) {
      spy.reset();
    }
  }),
};

export default mockCanvasContext;
