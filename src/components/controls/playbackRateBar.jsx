import React from 'react';

import { getWidth, getHeight, getOffset } from '../../util/index';
import { classes, defaultOptions } from '../../util/constants';

class PlaybackRateBar extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
      setPlaybackRate: React.PropTypes.func.isRequired,
      verticalPlaybackRate: React.PropTypes.bool,
      minPlaybackRate: React.PropTypes.number,
      maxPlaybackRate: React.PropTypes.number,
      barDrag: React.PropTypes.bool,
    };
  }
  static get defaultProps() {
    return {
      verticalPlaybackRate: defaultOptions.verticalPlaybackRate,
      minPlaybackRate: defaultOptions.minPlaybackRate,
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
      barDrag: defaultOptions.barDrag,
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  }
  onClick = e => this.movePlaybackRate(e)
  onMouseMove = e => (this.props.barDrag && this.dragging ? this.movePlaybackRate(e) : null)
  onMouseDown = () => (this.dragging = true)
  onMouseUp = () => (this.dragging = false)
  movePlaybackRate = (e) => {
    const offset = getOffset(this.playbackRateBar);
    const x = e.pageX - offset.left;
    const w = getWidth(this.playbackRateBar);
    const y = (getHeight(this.playbackRateBar) - e.pageY) + offset.top;
    const h = getHeight(this.playbackRateBar);
    let ratio;

    if (this.props.verticalPlaybackRate) {
      ratio = y / h;
    } else {
      ratio = x / w;
    }

    const playbackRateValue = (ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate))
                              + this.props.minPlaybackRate;

    this.props.setPlaybackRate(playbackRateValue);
  };
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        {...this.props} ref={ref => (this.playbackRateBar = ref)}
        className={classes.PLAYBACK_RATE_BAR} onClick={this.onClick}
        onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PlaybackRateBar;
