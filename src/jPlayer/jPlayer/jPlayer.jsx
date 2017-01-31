import React from 'react';
import classNames from 'classnames';

import { defaultOptions, statusDefaultValues, classes, loopOptions } from '../../util/constants';
import KeyControl from '../keyControl/keyControl.container';

const JPlayer = ({ video, paused, fullScreen, muted,
  volume, seeking, loop, keyEnabled, setJPlayer, children, ...attributes }) => {
  const playerClasses = classNames(classes.JPLAYER, {
    [classes.AUDIO]: !video,
    [classes.VIDEO]: video,
    [classes.states.PLAYING]: !paused,
    [classes.states.FULL_SCREEN]: fullScreen,
    [classes.states.MUTED]: muted,
    [classes.states.VOLUME_LOW]: !muted && volume < 0.5,
    [classes.states.VOLUME_HIGH]: !muted && volume >= 0.5,
    [classes.states.SEEKING]: seeking,
    [classes.states.LOOPED]: loop === loopOptions.LOOP,
    // 'jp-video-270p': sizeCssClass !== undefined,
    // 'jp-video-full': sizeFullCssClass !== undefined,
  });
  return (
    <div {...attributes} ref={setJPlayer} className={playerClasses}>
      {children}
      {keyEnabled && <KeyControl />}
    </div>
  );
};

JPlayer.propTypes = {
  video: React.PropTypes.bool,
  paused: React.PropTypes.bool.isRequired,
  fullScreen: React.PropTypes.bool,
  muted: React.PropTypes.bool,
  volume: React.PropTypes.number,
  seeking: React.PropTypes.bool.isRequired,
  loop: React.PropTypes.string,
  setJPlayer: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  keyEnabled: React.PropTypes.bool,
};

JPlayer.defaultProps = {
  video: defaultOptions.mediaSettings.video,
  paused: statusDefaultValues.paused,
  fullScreen: defaultOptions.fullScreen,
  muted: defaultOptions.muted,
  volume: defaultOptions.volume,
  seeking: statusDefaultValues.seeking,
  loop: defaultOptions.loop,
  keyEnabled: defaultOptions.keyEnabled,
  setJPlayer: null,
};

export default JPlayer;
