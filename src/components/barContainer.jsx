import { connectWithId } from 'react-jplayer-utils';
import { compose, withHandlers, lifecycle as setLifecycle } from 'recompose';

import Bar from './bar';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  barDrag: jPlayers[id].barDrag,
});

const handlers = () => {
  let bar;
  let dragging;

  return {
    setBar: () => (ref) => {
      bar = ref;
    },
    onClick: props => e => props.clickMoveBar(bar, e),
    onTouchStart: () => () => {
      dragging = true;
    },
    onTouchMove: props => (e) => {
      if (props.barDrag && dragging) {
        props.touchMoveBar(bar, e);
      }
    },
    onTouchEnd: () => () => {
      dragging = false;
    },
    onMouseMove: props => (e) => {
      if (props.barDrag && dragging) {
        props.clickMoveBar(bar, e);
      }
    },
    onMouseDown: () => () => {
      dragging = true;
    },
    onMouseUp: () => () => {
      dragging = false;
    },
  };
};

const lifecycle = {
  componentDidMount() {
    document.addEventListener('mouseup', this.props.onMouseUp);
    document.addEventListener('mousemove', this.props.onMouseMove);
    document.addEventListener('touchmove', this.props.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.props.onTouchEnd);
  },
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.props.onMouseUp);
    document.removeEventListener('mousemove', this.props.onMouseMove);
    document.removeEventListener('touchmove', this.props.onTouchMove);
    document.removeEventListener('touchend', this.props.onTouchEnd);
  },
};

export default compose(
  connectWithId(mapStateToProps),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(Bar);
