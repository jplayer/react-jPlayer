import merge from 'lodash.merge';
import { createSpy, isSpy } from 'expect';
import { defaultOptions, defaultStatus } from './constants';

export const getJPlayers = (...options) => {
  const jPlayers = {};

  const setJPlayer = (jPlayerNumber = 1, option) => {
    const id = `jPlayer-${jPlayerNumber}`;

    jPlayers[id] = {
      ...merge({}, defaultStatus, defaultOptions, option),
      id,
    };
  };

  options.forEach((option, i) => {
    setJPlayer(i + 1, option);
  });

  if (options.length === 0) {
    setJPlayer();
  }

  return {
    jPlayers,
  };
};

export const getDefaultJPlayers = (numberOfJPlayers = 1, mergeDefaultValues = false, options) => {
  const jPlayers = {};

  for (let i = 1; i < numberOfJPlayers + 1; i += 1) {
    jPlayers[`jPlayer-${i}`] = mergeDefaultValues ?
      merge({}, defaultStatus, defaultOptions, options) : { ...options };
  }

  return {
    jPlayers,
  };
};

export const mockCanvasContext = {
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
