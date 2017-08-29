import React from 'react';
import PropTypes from 'prop-types';
import { connectWithId, toPercentage, toRelativePercentage } from 'react-jplayer-utils';

import Events from './events/eventsContainer';
import Track from './track/track';
import { setOption } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  loop: jPlayers[id].loop,
  src: jPlayers[id].src,
  playHeadPercent: jPlayers[id].playHeadPercent,
  paused: jPlayers[id].paused,
  defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  preload: jPlayers[id].preload,
  volume: jPlayers[id].volume,
  muted: jPlayers[id].muted,
  autoplay: jPlayers[id].autoplay,
  newTime: jPlayers[id].newTime,
  tracks: jPlayers[id].media.tracks,
});

class MediaContainer extends React.Component {
  componentDidMount() {
    if (this.props.src !== null) {
      this.currentMedia.src = this.props.src;
    }

    this.updateOtherMediaValues();
  }
  componentDidUpdate(prevProps) {
    this.updateOtherMediaValues();

    if (prevProps.src !== this.props.src) {
      this.updateMediaSrc();
    }

    if (prevProps.newTime !== null) {
      this.updateMediaTime();
    }

    if (prevProps.playHeadPercent !== this.props.playHeadPercent) {
      this.updateMediaTimeAfterSeeking();
    }

    if (prevProps.paused !== this.props.paused) {
      this.updateMediaPlayState();
    }
  }
  getCurrentPercentRelative = () => {
    let currentPercentRelative = 0;

    if (this.currentMedia.seekable.length > 0) {
      currentPercentRelative = toPercentage(this.currentMedia.currentTime,
        this.getSeekableEnd());
    }
    return currentPercentRelative;
  }
  setCurrentMedia = (ref) => {
    this.currentMedia = ref;
  }
  getSeekableEnd = () => this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1)
  updateMediaStatus = () => {
    let seekPercent = 0;

    const currentPercentAbsolute = toPercentage(this.currentMedia.currentTime,
      this.currentMedia.duration);

    if (this.currentMedia.seekable.length > 0) {
      seekPercent = toPercentage(this.getSeekableEnd(), this.currentMedia.duration);
    }

    this.props.setOption(this.props.id, 'seekPercent', seekPercent);
    this.props.setOption(this.props.id, 'currentPercentRelative', this.getCurrentPercentRelative());
    this.props.setOption(this.props.id, 'currentPercentAbsolute', currentPercentAbsolute);
    this.props.setOption(this.props.id, 'currentTime', this.currentMedia.currentTime);
    this.props.setOption(this.props.id, 'duration', this.currentMedia.duration);
    this.props.setOption(this.props.id, 'playbackRate', this.currentMedia.playbackRate);
  }
  updateMediaSrc = () => {
    this.currentMedia.src = this.props.src;
  }
  updateMediaTime = () => {
    this.currentMedia.currentTime = this.props.newTime;
    this.props.setOption(this.props.id, 'newTime', null);
  }
  updateMediaTimeAfterSeeking = () => {
    // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
    // Hasn't fully loaded the song????
    if (this.currentMedia.seekable.length > 0) {
      const seekableEnd = this.getSeekableEnd();

      if (isFinite(seekableEnd)) {
        this.currentMedia.currentTime = toRelativePercentage(
          this.props.playHeadPercent,
          seekableEnd,
        );
        /* Media events don't fire fast enough to give a smooth animation
          when dragging so we update it here as well, same problem as above? */
        this.props.setOption(
          this.props.id,
          'currentPercentRelative',
          this.getCurrentPercentRelative(),
        );
      }
    }
  }
  updateMediaPlayState = () => {
    if (this.props.paused) {
      this.currentMedia.pause();
    } else {
      this.currentMedia.play();
    }
  }
  updateOtherMediaValues = () => {
    this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
    this.currentMedia.playbackRate = this.props.playbackRate;
    this.currentMedia.preload = this.props.preload;
    this.currentMedia.volume = this.props.volume;
    this.currentMedia.muted = this.props.muted;
    this.currentMedia.autoplay = this.props.autoplay;
    this.currentMedia.loop = this.props.loop;
  }
  render() {
    return (
      <Events
        currentMedia={this.currentMedia}
        updateMediaStatus={this.updateMediaStatus}
        pauseOthers={this.pauseOthers}
        {...this.props.events}
      >
        {React.cloneElement(React.Children.only(this.props.children), {
          ref: this.setCurrentMedia,
        }, this.props.tracks.map(track => <Track key={track.src} {...track} />))}
      </Events>
    );
  }
}

MediaContainer.defaultProps = {
  newTime: null,
  events: null,
};

MediaContainer.propTypes = {
  src: PropTypes.string.isRequired,
  playHeadPercent: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
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
  id: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  newTime: PropTypes.number,
  loop: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
  defaultPlaybackRate: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  playbackRate: PropTypes.number.isRequired,
  preload: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      default: PropTypes.bool,
      kind: PropTypes.string,
      src: PropTypes.string.isRequired,
      label: PropTypes.string,
      srclang: PropTypes.string,
    }),
  ).isRequired,
};

export default connectWithId(mapStateToProps, {
  setOption,
})(MediaContainer);
