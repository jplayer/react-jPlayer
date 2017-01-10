import React from 'react';

import { getWidth, getHeight, getOffset } from '../../util/index';
import { classes } from '../../util/constants';

class VolumeBar extends React.Component {
  static get propTypes() {
    return {
      volume: React.PropTypes.func,
      verticalVolume: React.PropTypes.bool,
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
  onClick = e => this.moveVolumeBar(e)
  onMouseMove = e => (this.props.barDrag && this.dragging ? this.moveVolumeBar(e) : null)
  onMouseDown = () => (this.dragging = true)
  onMouseUp = () => (this.dragging = false)
  moveVolumeBar = (e) => {
    const offset = getOffset(this.volumeBar);
    const x = e.pageX - offset.left;
    const w = getWidth(this.volumeBar);
    const y = (getHeight(this.volumeBar) - e.pageY) + offset.top;
    const h = getHeight(this.volumeBar);

    if (this.props.verticalVolume) {
      this.props.volume(y / h);
    } else {
      this.props.volume(x / w);
    }
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        {...this.props.attributes} ref={ref => (this.volumeBar = ref)}
        className={classes.VOLUME_BAR} onClick={this.onClick} onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>
    );
  }
}

export default VolumeBar;
