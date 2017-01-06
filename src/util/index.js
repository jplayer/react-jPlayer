import { formats, errors, hints, timeFormats } from './constants';

export const mapStateToProps = ({ jPlayers }, ownProps) => ({
  jPlayers,
  attributes: ownProps,
});

export const updateObject = (existingObject, newValues) => ({
  ...existingObject,
  ...newValues,
});

export const noFormatSupportedError = context => ({
  context,
  message: errors.FORMAT_NO_SUPPORT,
  hint: hints.FORMAT_NO_SUPPORT,
});

export const urlNotSupportedError = context => ({
  context,
  message: errors.URL_NO_SUPPORT,
  hint: hints.URL_NO_SUPPORT,
});

export const urlNotSetError = context => ({
  context,
  message: errors.URL_NOT_SET,
  hint: hints.URL_NOT_SET,
});

export const getOffset = el => (
  {
    top: el.getBoundingClientRect().top + document.body.scrollTop,
    left: el.getBoundingClientRect().left + document.body.scrollLeft,
  }
);
export const getWidth = el => el.getBoundingClientRect().width;
export const getHeight = el => el.getBoundingClientRect().height;

// The codec type is irrelevant.
export const testCanPlayType = media => media.canPlayType(formats.mp3.CODEC);

export const limitValue = (value, min, max) => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }
  return value;
};

export const convertTime = (seconds) => {
  const myTime = new Date(seconds * 1000);
  const hour = myTime.getUTCHours();
  const min = timeFormats.showHour ? myTime.getUTCMinutes() : (myTime.getUTCMinutes() * 60) + hour;
  const sec = timeFormats.showMin ? myTime.getUTCSeconds() : (myTime.getUTCSeconds() * 60) + min;
  const strHour = (timeFormats.padHour && hour < 10) ? `0${hour}` : hour;
  const strMin = (timeFormats.padMin && min < 10) ? `0${min}` : min;
  const strSec = (timeFormats.padSec && sec < 10) ? `0${sec}` : sec;

  let strTime = '';
  strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : '';
  strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : '';
  strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : '';

  return strTime;
};
