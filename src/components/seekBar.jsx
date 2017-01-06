import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../util/constants';
import { mapStateToProps, getOffset, getWidth } from '../util/index';
import { playHead } from '../actions/jPlayerActions';
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
  static get propTypes() {
    return {
      barDrag: React.PropTypes.bool,
      dispatch: React.PropTypes.func,
      id: React.PropTypes.string,
      attributes: React.PropTypes.node,
      seekPercent: React.PropTypes.number,
      children: React.PropTypes.element,
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onSeekBarMouseUp);
    document.addEventListener('mousemove', this.onSeekBarMouseMove);
  }
  onSeekBarClick = e => this.movePlayHead(e)
  onSeekBarMouseMove = e => (this.props.barDrag && this.dragging ? this.movePlayHead(e) : null)
  onSeekBarMouseDown = () => (this.dragging = true)
  onSeekBarMouseUp = () => (this.dragging = false)
  movePlayHead = (e) => {
    const offset = getOffset(this.seekBar);
    const x = e.pageX - offset.left;
    const w = getWidth(this.seekBar);
    const percentage = 100 * (x / w);

    this.props.dispatch(playHead(percentage, this.props.id));
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onSeekBarMouseUp);
    document.removeEventListener('mousemove', this.onSeekBarMouseMove);
  }
  render() {
    return (
      <button
        ref={ref => (this.seekBar = ref)} className={classes.SEEK_BAR}
        style={{ width: `${this.props.seekPercent}%` }} onClick={this.onSeekBarClick}
        onMouseDown={this.onSeekBarMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </button>
    );
  }
}

export default connect(mapStateToProps)(jPlayerConnect(SeekBar, mapJPlayerProps));
