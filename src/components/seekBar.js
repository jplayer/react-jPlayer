import React from 'react';
import { connect } from 'react-redux';

import { keys, classNames } from '../util/constants';
import { mapStateToProps, getOffset, getWidth, limitValue, convertTime } from '../util/index';
import actions, { playHead } from '../actions/jPlayerActions';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  seekPercent: jPlayers[id].seekPercent,
  seeking: jPlayers[id].seeking,
  remaining: jPlayers[id].remaining,
  media: jPlayers[id].media,
  currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
  currentPercentRelative: jPlayers[id].currentPercentRelative,
  smoothPlayBar: jPlayers[id].smoothPlayBar,
  playHeadPercent: jPlayers[id].playHeadPercent,
  barDrag: jPlayers[id].barDrag,
});

class SeekBar extends React.Component {
  onSeekBarClick = e => this.movePlayHead(e)
  onSeekBarMouseMove = e => this.props.barDrag && this.dragging ? this.movePlayHead(e) : null
  onSeekBarMouseDown = () => this.dragging = true
  onSeekBarMouseUp = () => this.dragging = false
  movePlayHead = (e) => {
    let offset = getOffset(this.seekBar),
      x = e.pageX - offset.left,
      w = getWidth(this.seekBar),
      percentage = 100 * x / w;

    this.props.dispatch(playHead(percentage, this.props.id));
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onSeekBarMouseUp);
    document.addEventListener('mousemove', this.onSeekBarMouseMove);
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onSeekBarMouseUp);
    document.removeEventListener('mousemove', this.onSeekBarMouseMove);
  }
  render() {
    return (
      <div
        ref={ref => this.seekBar = ref} className={classNames.SEEK_BAR} style={{ width: `${this.props.seekPercent}%` }} onClick={this.onSeekBarClick}
        onMouseDown={this.onSeekBarMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(jPlayerConnect(SeekBar, mapJPlayerProps));
