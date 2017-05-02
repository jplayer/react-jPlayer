import expect from 'expect';
import { convertTime } from 'react-jplayer-utils';

import { defaultOptions } from './constants';

describe('convertTime', () => {
  it('sets timeText to empty if time is NaN', () => {
    const timeText = convertTime('test');

    expect(timeText).toBe('');
  });

  it('sets timeText to have hours if showHour is true', () => {
    const timeText = convertTime(200000, {
      ...defaultOptions.timeFormats,
      showHour: true,
      padHour: true,
    });

    expect(timeText).toBe('07:33:20');
  });

  it('sets timeText to not have minutes if showMin is false', () => {
    const timeText = convertTime(200000, {
      ...defaultOptions.timeFormats,
      showMin: false,
    });

    expect(timeText).toBe('27200');
  });

  it('sets timeText to not have seconds if showSec is false', () => {
    const timeText = convertTime(200000, {
      ...defaultOptions.timeFormats,
      showSec: false,
      sepMin: '',
    });

    expect(timeText).toBe('453');
  });

  it('minutes don\'t get padded when false', () => {
    const timeText = convertTime(20, {
      ...defaultOptions.timeFormats,
      padMin: false,
    });

    expect(timeText).toBe('0:20');
  });
});
