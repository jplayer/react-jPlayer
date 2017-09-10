import React from 'react';
import PropTypes from 'prop-types';

import Events from './events/eventsContainer';
import Track from './track/track';
import { classes } from '../../util/constants';

const Media = props => (
  <Events
    updateMediaStatus={props.updateMediaStatus}
    onAbort={props.onAbort}
    onCanPlay={props.onCanPlay}
    onCanPlayThrough={props.onCanPlayThrough}
    onDurationChange={props.onDurationChange}
    onEmptied={props.onEmptied}
    onEncrypted={props.onEncrypted}
    onEnded={props.onEnded}
    onError={props.onError}
    onLoadedData={props.onLoadedData}
    onLoadedMetadata={props.onLoadedMetadata}
    onLoadStart={props.onLoadStart}
    onPause={props.onPause}
    onPlay={props.onPlay}
    onPlaying={props.onPlaying}
    onProgress={props.onProgress}
    onRateChange={props.onRateChange}
    onSeeked={props.onSeeked}
    onSeeking={props.onSeeking}
    onStalled={props.onStalled}
    onSuspend={props.onSuspend}
    onTimeUpdate={props.onTimeUpdate}
    onVolumeChange={props.onVolumeChange}
    onWaiting={props.onWaiting}
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
  tracks: [],
};

Media.propTypes = {
  children: PropTypes.node.isRequired,
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
  onAbort: PropTypes.func.isRequired,
  onCanPlay: PropTypes.func.isRequired,
  onCanPlayThrough: PropTypes.func.isRequired,
  onDurationChange: PropTypes.func.isRequired,
  onEmptied: PropTypes.func.isRequired,
  onEncrypted: PropTypes.func.isRequired,
  onEnded: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onLoadedData: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPlaying: PropTypes.func.isRequired,
  onProgress: PropTypes.func.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onSeeked: PropTypes.func.isRequired,
  onSeeking: PropTypes.func.isRequired,
  onStalled: PropTypes.func.isRequired,
  onSuspend: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  onWaiting: PropTypes.func.isRequired,
};

export default Media;
