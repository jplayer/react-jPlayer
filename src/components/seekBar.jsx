import React from 'react';

import { getWidth, getOffset } from '../util/index';
import { classes } from '../util/constants';

class SeekBar extends React.Component {
  static get propTypes() {
    return {
      seekPercent: React.PropTypes.number,
      playHead: React.PropTypes.func,
      barDrag: React.PropTypes.bool,
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  }
  onClick = e => this.movePlayHead(e)
  onMouseMove = e => (this.props.barDrag && this.dragging ? this.movePlayHead(e) : null)
  onMouseDown = () => (this.dragging = true)
  onMouseUp = () => (this.dragging = false)
  movePlayHead = (e) => {
    const offset = getOffset(this.seekBar);
    const x = e.pageX - offset.left;
    const w = getWidth(this.seekBar);
    const percentage = 100 * (x / w);

    this.props.playHead(percentage);
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        ref={ref => (this.seekBar = ref)} className={classes.SEEK_BAR}
        style={{ width: `${this.props.seekPercent}%` }} onClick={this.onClick}
        onMouseDown={this.onMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default SeekBar;
