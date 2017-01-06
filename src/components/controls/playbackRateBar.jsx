import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, getWidth, getHeight, getOffset } from '../../util/index';
import { classes } from '../../util/constants';
import { playbackRate } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  barDrag: jPlayers[id].barDrag,
});

class PlaybackRateBar extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      barDrag: React.PropTypes.bool,
      verticalPlaybackRate: React.PropTypes.bool,
      minPlaybackRate: React.PropTypes.number,
      maxPlaybackRate: React.PropTypes.number,
      dispatch: React.PropTypes.func,
      id: React.PropTypes.string,
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onPlaybackRateMouseUp);
    document.addEventListener('mousemove', this.onPlaybackRateMouseMove);
  }
  onPlaybackRateBarClick = e => this.movePlaybackRate(e)
  onPlaybackRateMouseMove = e => (
    this.props.barDrag && this.dragging ? this.movePlaybackRate(e) : null
  )
  onPlaybackRateMouseDown = () => (this.dragging = true)
  onPlaybackRateMouseUp = () => (this.dragging = false)
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

    this.props.dispatch(playbackRate(playbackRateValue, this.props.id));
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onPlaybackRateMouseUp);
    document.removeEventListener('mousemove', this.onPlaybackRateMouseMove);
  }
  render() {
    return (
      <div
        ref={ref => (this.playbackRateBar = ref)} className={classes.PLAYBACK_RATE_BAR}
        onClick={this.onPlaybackRateBarClick} onMouseDown={this.onPlaybackRateMouseDown}
        {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(jPlayerConnect(PlaybackRateBar, mapJPlayerProps));
