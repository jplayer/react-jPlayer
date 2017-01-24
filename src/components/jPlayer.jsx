import React from 'react';
import classNames from 'classnames';

import { defaultOptions, statusDefaultValues, classes, loopOptions } from '../util/constants';
import KeyControl from '../containers/keyControl';

const JPlayer = ({ mediaSettings, paused, fullScreen, muted,
  volume, seeking, loop, id, keyEnabled, children, ...attributes }) => {
  const playerClasses = classNames(classes.JPLAYER, {
    [classes.AUDIO]: !mediaSettings.video,
    [classes.VIDEO]: mediaSettings.video,
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
    <div {...attributes} id={id} className={playerClasses}>
      {children}
      {keyEnabled && <KeyControl />}
    </div>
  );
};

JPlayer.propTypes = {
  id: React.PropTypes.number.isRequired,
  mediaSettings: React.PropTypes.shape({
    video: React.PropTypes.bool,
    formats: React.PropTypes.array,
    available: React.PropTypes.string,
    supportedFormats: React.PropTypes.objectOf(React.PropTypes.string),
  }),
  paused: React.PropTypes.bool,
  fullScreen: React.PropTypes.bool,
  muted: React.PropTypes.bool,
  volume: React.PropTypes.number,
  seeking: React.PropTypes.bool,
  loop: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  keyEnabled: React.PropTypes.bool,
};

JPlayer.defaultProps = {
  mediaSettings: defaultOptions.mediaSettings,
  paused: statusDefaultValues.paused,
  fullScreen: defaultOptions.fullScreen,
  muted: defaultOptions.muted,
  volume: defaultOptions.volume,
  seeking: statusDefaultValues.seeking,
  loop: defaultOptions.loop,
  keyEnabled: defaultOptions.keyEnabled,
};

export default JPlayer;
