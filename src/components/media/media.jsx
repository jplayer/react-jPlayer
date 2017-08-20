import React from 'react';
import PropTypes from 'prop-types';

import Events from './events/events';

const Media = props => (
  <Events
    currentMedia={props.currentMedia}
    updateMediaStatus={props.updateMediaStatus}
    pauseOthers={props.pauseOthers}
    {...props.events}
  >
    {React.cloneElement(React.Children.only(props.children),
      {
        ref: props.setCurrentMedia,
      })
    }
  </Events>
);

Media.defaultProps = {
  currentMedia: null,
  events: null,
};

Media.propTypes = {
  children: PropTypes.node.isRequired,
  currentMedia: PropTypes.object,
  setCurrentMedia: PropTypes.func.isRequired,
  updateMediaStatus: PropTypes.func.isRequired,
  pauseOthers: PropTypes.func.isRequired,
  events: PropTypes.shape({
    onAbort: Function.prototype,
    onCanPlay: Function.prototype,
    onCanPlayThrough: Function.prototype,
    onDurationChange: Function.prototype,
    onEmptied: Function.prototype,
    onEncrypted: Function.prototype,
    onEnded: Function.prototype,
    onError: Function.prototype,
    onLoadedData: Function.prototype,
    onLoadedMetadata: Function.prototype,
    onLoadStart: Function.prototype,
    onPause: Function.prototype,
    onPlay: Function.prototype,
    onPlaying: Function.prototype,
    onProgress: Function.prototype,
    onRateChange: Function.prototype,
    onSeeked: Function.prototype,
    onSeeking: Function.prototype,
    onStalled: Function.prototype,
    onSuspend: Function.prototype,
    onTimeUpdate: Function.prototype,
    onVolumeChange: Function.prototype,
    onWaiting: Function.prototype,
  }),
};

export default Media;
