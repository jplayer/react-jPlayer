/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Media from '../media/mediaContainer';

const Audio = ({ events }) => (
  <Media events={events}>
    <audio />
  </Media>
);

Audio.defaultProps = {
  events: null,
};

Audio.propTypes = {
  events: PropTypes.shape({
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
  }),
};

export default compose(
  branch(
    props => props.require,
    renderComponent(Audio),
  ),
)(renderNothing(null));
