import React from 'react';

import { classes } from '../util/constants';

class SeekBar extends React.Component {
  static get propTypes() {
    return {
      seekPercent: React.PropTypes.number,
      setSeekBar: React.PropTypes.func,
      onMouseUp: React.PropTypes.func,
      onMouseDown: React.PropTypes.func,
      onMouseMove: React.PropTypes.func,
      onClick: React.PropTypes.func,
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.props.onMouseUp);
    document.addEventListener('mousemove', this.props.onMouseMove);
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <div
        ref={this.props.setSeekBar} className={classes.SEEK_BAR}
        style={{ width: `${this.props.seekPercent}%` }} onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default SeekBar;
