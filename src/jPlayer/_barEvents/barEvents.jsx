import React from 'react';

import { connectWithId } from '../../util/index';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  barDrag: jPlayers[uid].barDrag,
});

class BarEvents extends React.Component {
  static get propTypes() {
    return {
      clickMoveBar: React.PropTypes.func.isRequired,
      touchMoveBar: React.PropTypes.func.isRequired,
      barDrag: React.PropTypes.bool.isRequired,
      children: React.PropTypes.node.isRequired,
    };
  }
  componentWillMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('touchmove', this.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.onTouchEnd);
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  }
  onClick = e => this.props.clickMoveBar(this.bar, e)
  onTouchStart = () => {
    this.dragging = true;
  }
  onTouchMove = e =>
    (this.props.barDrag && this.dragging ? this.props.touchMoveBar(this.bar, e) : null)
  onTouchEnd = () => {
    this.dragging = false;
  }
  onMouseMove = e =>
    (this.props.barDrag && this.dragging ? this.props.clickMoveBar(this.bar, e) : null)
  onMouseDown = () => {
    this.dragging = true;
  }
  onMouseUp = () => {
    this.dragging = false;
  }
  setBar = ref => (this.bar = ref)
  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      onClick: this.onClick,
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      setBar: this.setBar,
    });
  }
}

export default connectWithId(mapStateToProps)(BarEvents);
