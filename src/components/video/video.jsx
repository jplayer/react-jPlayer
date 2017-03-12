import React from 'react';

import Media from '../media/mediaContainer';
import { defaultStatus } from '../../util/constants';

const Video = ({ require, events, ...attributes }) => (
  require ?
    <Media {...events}>
      <video {...attributes} />
    </Media>
  : null
);

Video.defaultProps = {
  events: null,
  children: null,
  require: defaultStatus.mediaSettings.video,
};

Video.propTypes = {
  children: React.PropTypes.node,
  require: React.PropTypes.bool,
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
