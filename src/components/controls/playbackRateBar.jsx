import React from 'react';

import { getWidth, getHeight, getOffset } from '../../util/index';
import { classes } from '../../util/constants';

class PlaybackRateBar extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      playbackRate: React.PropTypes.func,
      verticalPlaybackRate: React.PropTypes.bool,
      minPlaybackRate: React.PropTypes.number,
      maxPlaybackRate: React.PropTypes.number,
      barDrag: React.PropTypes.bool,
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

    this.props.playbackRate(playbackRateValue);
  };
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        ref={ref => (this.playbackRateBar = ref)} className={classes.PLAYBACK_RATE_BAR}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PlaybackRateBar;
