import React from 'react';

import { getWidth, getHeight, getOffset } from '../../util/index';
import { classes, defaultOptions } from '../../util/constants';

class VolumeBar extends React.Component {
  static get propTypes() {
    return {
      setVolume: React.PropTypes.func.isRequired,
      verticalVolume: React.PropTypes.bool,
      barDrag: React.PropTypes.bool,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
    };
  }
  static get defaultProps() {
    return {
      verticalVolume: defaultOptions.verticalVolume,
      barDrag: defaultOptions.barDrag,
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
      this.props.setVolume(y / h);
    } else {
      this.props.setVolume(x / w);
    }
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        {...this.props} ref={ref => (this.volumeBar = ref)}
        className={classes.VOLUME_BAR} onClick={this.onClick} onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>
    );
  }
}

export default VolumeBar;
