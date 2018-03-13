import { connectWithId, getElementOffset } from 'react-jplayer-utils';
import { compose, withHandlers } from 'recompose';

import { setVolume } from '../../actions/actions';
import VolumeBar from './volumeBar';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  verticalVolume: jPlayers[id].verticalVolume,
});

const handlers = {
  moveVolumeBar: props => (bar, e) => {
    const offset = getElementOffset(bar);
    const w = bar.getBoundingClientRect().width;
    const h = bar.getBoundingClientRect().height;
    const y = (h - e.clientY) + offset.top;
    const x = e.clientX - offset.left;

    if (props.verticalVolume) {
      props.setVolume(props.id, y / h);
    } else {
      props.setVolume(props.id, x / w);
    }
  },
};

const secondHandlers = {
  clickMoveBar: props => (bar, e) => props.moveVolumeBar(bar, e),
  touchMoveBar: props => (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    props.moveVolumeBar(bar, e.touches[0]);
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setVolume,
  }),
  withHandlers(handlers),
  withHandlers(secondHandlers),
)(VolumeBar);
