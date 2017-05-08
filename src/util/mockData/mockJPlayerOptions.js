import { defaultStatus, defaultOptions } from '../constants';

export default {
  ...defaultStatus,
  ...defaultOptions,
  bufferedTimeRanges: [
    { start: 0, end: 20 },
    { start: 30, end: 50 },
  ],
  duration: 150,
  bufferColour: '#eee',
};
