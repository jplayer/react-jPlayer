import React from 'react';
import { connectWithId, getWidth, getOffset  } from '../util/index';
import { defaultOptions } from '../util/constants';
import { setPlayHead } from '../actions/jPlayerActions';
import SeekBar from '../components/seekBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  barDrag: jPlayers[id].barDrag,
  children,
  ...attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  playHead: percentage => dispatch(setPlayHead(percentage, id)),
  ...stateProps,
});

class SeekBarContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      seekPercent: React.PropTypes.number.isRequired,
      playHead: React.PropTypes.func.isRequired,
      barDrag: React.PropTypes.bool,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
    };
  }
  static get defaultProps() {
    return {
      barDrag: defaultOptions.barDrag,
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
  setSeekBar = ref => (this.seekBar = ref)
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
      <SeekBar
        setSeekBar={this.setSeekBar} onClick={this.onClick}
        onMouseDown={this.onMouseDown} seekPercent={this.props.seekPercent}
        {...this.props.attributes}
      >
        {this.props.children}
      </SeekBar>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBarContainer);
