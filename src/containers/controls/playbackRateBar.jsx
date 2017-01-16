import React from 'react';

import { connectWithId, getWidth, getHeight, getOffset } from '../../util/index';
import { defaultOptions } from '../../util/constants';
import { setPlaybackRate } from '../../actions/jPlayerActions';
import PlaybackRateBar from '../../components/controls/playbackRateBar';
import PlaybackRateBarValue from './playbackRateBarValue';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  barDrag: jPlayers[id].barDrag,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  setPlaybackRate: newPlaybackRate => dispatch(setPlaybackRate(newPlaybackRate, id)),
  ...stateProps,
});

class PlaybackRateBarContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      setPlaybackRate: React.PropTypes.func.isRequired,
      verticalPlaybackRate: React.PropTypes.bool,
      minPlaybackRate: React.PropTypes.number,
      maxPlaybackRate: React.PropTypes.number,
      barDrag: React.PropTypes.bool,
    };
  }
  static get defaultProps() {
    return {
      attributes: {},
      verticalPlaybackRate: defaultOptions.verticalPlaybackRate,
      minPlaybackRate: defaultOptions.minPlaybackRate,
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
      barDrag: defaultOptions.barDrag,
      playbackRate: defaultOptions.playbackRate,
      children: (<PlaybackRateBarValue />),
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  }
  onClick = e => this.movePlaybackRate(e)
  onMouseMove = e => (this.props.barDrag && this.dragging ? this.movePlaybackRate(e) : null)
  onMouseDown = () => (this.dragging = true)
  onMouseUp = () => (this.dragging = false)
  setPlaybackRate = ref => (this.playbackRateBar = ref)
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

    this.props.setPlaybackRate(playbackRateValue);
  }
  componentWillUnMount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
  render() {
    return (
      <PlaybackRateBar
        onClick={this.onClick} onMouseDown={this.onMouseDown}
        setPlaybackRate={this.setPlaybackRate} {...this.props.attributes}
      >
        {this.props.children}
      </PlaybackRateBar>
    );
  }
}


export default connectWithId(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);
