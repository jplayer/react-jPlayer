let isBarVisible;

export const onTouchStart = (e) => {
  isBarVisible = e.currentTarget.parentElement
    .querySelector('.jp-bar-container').clientHeight > 0;
};

export const onClick = (setMute, muted, uid) => () => {
  if (isBarVisible !== false) {
    setMute(!muted, uid);
  }
  isBarVisible = undefined;
};
