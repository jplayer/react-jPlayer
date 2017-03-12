/* This file makes sure that mute is only called when the
    volume bar is shown on mobile*/

let isBarVisible;

export const onTouchStart = (e) => {
  isBarVisible = e.currentTarget.parentElement
    .querySelector('.jp-bar-container').clientHeight > 0;
};

export const onClick = (setMute, muted, id) => () => {
  if (isBarVisible !== false) {
    setMute(!muted, id);
  }
  isBarVisible = undefined;
};
