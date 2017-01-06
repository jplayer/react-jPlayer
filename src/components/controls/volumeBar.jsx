import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, getWidth, getHeight, getOffset } from '../../util/index';
import { classes } from '../../util/constants';
import { volume } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  verticalVolume: jPlayers[id].verticalVolume,
  noVolume: jPlayers[id].noVolume,
  muted: jPlayers[id].muted,
  barDrag: jPlayers[id].barDrag,
});

class VolumeBar extends React.Component {
  static get propTypes() {
    return {
      barDrag: React.PropTypes.bool,
      verticalVolume: React.PropTypes.bool,
      dispatch: React.PropTypes.func,
      id: React.PropTypes.string,
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onVolumeBarMouseUp);
    document.addEventListener('mousemove', this.onVolumeBarMouseMove);
  }
  onVolumeBarClick = e => this.moveVolumeBar(e)
  onVolumeBarMouseMove = e => (this.props.barDrag && this.dragging ? this.moveVolumeBar(e) : null)
  onVolumeBarMouseDown = () => (this.dragging = true)
  onVolumeBarMouseUp = () => (this.dragging = false)
  moveVolumeBar = (e) => {
    const offset = getOffset(this.volumeBar);
    const x = e.pageX - offset.left;
    const w = getWidth(this.volumeBar);
    const y = (getHeight(this.volumeBar) - e.pageY) + offset.top;
    const h = getHeight(this.volumeBar);

    if (this.props.verticalVolume) {
      this.props.dispatch(volume(y / h, this.props.id));
    } else {
      this.props.dispatch(volume(x / w, this.props.id));
    }
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onVolumeBarMouseUp);
    document.removeEventListener('mousemove', this.onVolumeBarMouseMove);
  }
  render() {
    return (
      <div
        ref={ref => (this.volumeBar = ref)} className={classes.VOLUME_BAR}
        onClick={this.onVolumeBarClick} onMouseDown={this.onVolumeBarMouseDown}
        {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(jPlayerConnect(VolumeBar, mapJPlayerProps));
