import React from 'react';

import { defaultOptions } from '../util/constants';
import Media from '../containers/media';

const Video = ({ children, onClick, title, ...attributes }) => (
  <Media>
    <video {...attributes} onClick={onClick} title={title}>
      {children}
    </video>
  </Media>
);

Video.defaultProps = {
  children: null,
  onClick: null,
  title: defaultOptions.media.title,
};

Video.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  onClick: React.PropTypes.func,
  setCurrentMedia: React.PropTypes.func,
  title: React.PropTypes.string,
  events: React.PropTypes.shape({
    onProgress: React.PropTypes.func,
    onTimeUpdate: React.PropTypes.func,
    onDurationChange: React.PropTypes.func,
    onRateChange: React.PropTypes.func,
    onSeeking: React.PropTypes.func,
    onSeeked: React.PropTypes.func,
    onPlay: React.PropTypes.func,
    onRepeat: React.PropTypes.func,
    onEnded: React.PropTypes.func,
    onError: React.PropTypes.func,
    onPlaying: React.PropTypes.func,
    onPause: React.PropTypes.func,
    onWaiting: React.PropTypes.func,
    onSuspend: React.PropTypes.func,
    onVolumeChange: React.PropTypes.func,
    onLoadStart: React.PropTypes.func,
    onLoadedMetadata: React.PropTypes.func,
    onAbort: React.PropTypes.func,
    onEmptied: React.PropTypes.func,
    onStalled: React.PropTypes.func,
    onLoadedData: React.PropTypes.func,
    onCanPlay: React.PropTypes.func,
    onCanPlayThrough: React.PropTypes.func,
  }),
};

export default Video;
