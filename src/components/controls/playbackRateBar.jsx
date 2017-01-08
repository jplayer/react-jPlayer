import React from 'react';

import { classes } from '../../util/constants';

class PlaybackRateBar extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      onClick: React.PropTypes.func,
      onMouseMove: React.PropTypes.func,
      onMouseDown: React.PropTypes.func,
      onMouseUp: React.PropTypes.func,
      setPlaybackRateBar: React.PropTypes.func,
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.props.onMouseUp);
    document.addEventListener('mousemove', this.props.onMouseMove);
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.props.onMouseUp);
    document.removeEventListener('mousemove', this.props.onMouseMove);
  }
  render() {
    return (
      <div
        ref={this.props.setPlaybackRateBar} className={classes.PLAYBACK_RATE_BAR}
        onClick={() => this.props.onClick(this.playbackRateBar)}
        onMouseDown={this.props.onMouseDown} {...this.props.attributes}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PlaybackRateBar;
