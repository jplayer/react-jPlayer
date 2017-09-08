import React from 'react';
import PropTypes from 'prop-types';

import Events from './events/eventsContainer';
import Track from './track/track';
import { classes } from '../../util/constants';

const Media = props => (
  <Events
    currentMedia={props.getCurrentMedia()}
    updateMediaStatus={props.updateMediaStatus}
    {...props.events}
  >
    {React.cloneElement(React.Children.only(props.children),
      {
        ref: props.setCurrentMedia,
        className: classes.MEDIA,
      }, props.tracks.map(track => <Track key={track.src} {...track} />))
    }
  </Events>
);

Media.defaultProps = {
  events: null,
  tracks: [],
};

Media.propTypes = {
  children: PropTypes.node.isRequired,
  getCurrentMedia: PropTypes.func.isRequired,
  setCurrentMedia: PropTypes.func.isRequired,
  updateMediaStatus: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      default: PropTypes.bool,
      kind: PropTypes.string,
      src: PropTypes.string.isRequired,
      label: PropTypes.string,
      srclang: PropTypes.string,
    }),
  ),
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
