import React from 'react';

import { classes } from '../../util/constants';

class VolumeBar extends React.Component {
  static get propTypes() {
    return {
      setVolumeBar: React.PropTypes.func,
      onClick: React.PropTypes.func,
      onMouseDown: React.PropTypes.func,
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
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onVolumeBarMouseUp);
    document.removeEventListener('mousemove', this.onVolumeBarMouseMove);
  }
  render() {
    return (
      <div
        ref={this.props.setVolumeBar} className={classes.VOLUME_BAR}
        onClick={this.props.onClick} onMouseDown={this.props.onMouseDown}
        {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default VolumeBar;
