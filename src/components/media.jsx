import React from 'react';

import { classes } from '../util/constants';
import Audio from '../components/audio';
import Video from '../components/video';

const Media = ({ events, setCurrentMedia, children, ...attributes }) => (
  <div {...attributes} className={classes.MEDIA}>
    {React.Children.map(children, child => React.cloneElement(child,
      {
        ...events,
        setCurrentMedia,
      },
    ))}
  </div>
);

Media.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(Audio),
    React.PropTypes.instanceOf(Video),
  ]).isRequired,
  setCurrentMedia: React.PropTypes.func,
  events: {
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
  },
};

export default Media;
