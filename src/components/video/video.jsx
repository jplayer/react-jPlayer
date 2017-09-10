/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Media from '../media/mediaContainer';

const Video = props => (
  <Media
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
    <video />
  </Media>
);

Video.defaultProps = {
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
};

Video.propTypes = {
  onAbort: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onDurationChange: PropTypes.func,
  onEmptied: PropTypes.func,
  onEncrypted: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onLoadedData: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadStart: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onPlaying: PropTypes.func,
  onProgress: PropTypes.func,
  onRateChange: PropTypes.func,
  onSeeked: PropTypes.func,
  onSeeking: PropTypes.func,
  onStalled: PropTypes.func,
  onSuspend: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onWaiting: PropTypes.func,
};

export default compose(
  branch(
    props => props.require,
    renderComponent(Video),
  ),
)(renderNothing(null));

