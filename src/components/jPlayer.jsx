import React from 'react';
import classNames from 'classnames';

import { defaultOptions, statusDefaultValues, classes, loopOptions } from '../util/constants';
import KeyControl from '../containers/keyControl';

const JPlayer = ({ mediaSettings, paused, fullScreen, muted,
  volume, seeking, loop, id, keyEnabled, children, ...attributes }) => {
  const playerClasses = () => classNames(classes.JPLAYER, {
    'jp-video': mediaSettings.video,
    'jp-audio': !mediaSettings.video,
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
    <div {...attributes} id={id} className={playerClasses()}>
      {children}
      {keyEnabled && <KeyControl />}
    </div>
  );
};

JPlayer.propTypes = {
  id: React.PropTypes.string.isRequired,
  mediaSettings: React.PropTypes.shape({
    video: React.PropTypes.bool,
    formats: React.PropTypes.array,
    available: React.PropTypes.string,
    supportedFormats: React.PropTypes.objectOf(React.PropTypes.string),
  }),
  paused: React.PropTypes.bool.isRequired,
  fullScreen: React.PropTypes.bool.isRequired,
  muted: React.PropTypes.bool.isRequired,
  volume: React.PropTypes.number.isRequired,
  seeking: React.PropTypes.bool.isRequired,
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
