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
