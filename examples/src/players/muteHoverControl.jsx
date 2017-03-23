/* This file makes sure that mute is only called when the
    volume bar is shown on mobile */

let isBarVisible;

export const isVolumeBarVisible = (e) => {
  isBarVisible = e.currentTarget.parentElement
    .querySelector('.jp-volume-bar-container').clientHeight > 0;
};

/* Overwrite the default onClick with this which
  only triggers when volume bar is visible */
export const setMuteIfVolumeVisible = (setMute, id, muted) => {
  if (isBarVisible !== false) {
    setMute(id, !muted);
  }
  isBarVisible = undefined;
};
