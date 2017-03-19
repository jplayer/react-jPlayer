import React from 'react';

import Media from '../media/mediaContainer';

const Video = ({ require, events, children, attributes }) => (
  require ?
    <Media {...events}>
      <video {...attributes}>
        {children}
      </video>
    </Media>
  : null
);

Video.defaultProps = {
  events: null,
  children: null,
};

Video.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
  require: React.PropTypes.bool.isRequired,
  events: React.PropTypes.shape({
    onAbort: React.PropTypes.func,
    onCanPlay: React.PropTypes.func,
    onCanPlayThrough: React.PropTypes.func,
    onDurationChange: React.PropTypes.func,
    onEmptied: React.PropTypes.func,
    onEncrypted: React.PropTypes.func,
    onEnded: React.PropTypes.func,
    onError: React.PropTypes.func,
    onLoadedData: React.PropTypes.func,
    onLoadedMetadata: React.PropTypes.func,
    onLoadStart: React.PropTypes.func,
    onPause: React.PropTypes.func,
    onPlay: React.PropTypes.func,
    onPlaying: React.PropTypes.func,
    onProgress: React.PropTypes.func,
    onRateChange: React.PropTypes.func,
    onSeeked: React.PropTypes.func,
    onSeeking: React.PropTypes.func,
    onStalled: React.PropTypes.func,
    onSuspend: React.PropTypes.func,
    onTimeUpdate: React.PropTypes.func,
    onVolumeChange: React.PropTypes.func,
    onWaiting: React.PropTypes.func,
  }),
};

export default Video;
