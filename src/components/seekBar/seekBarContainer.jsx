import { compose, withHandlers } from 'recompose';
import { connectWithId, getElementOffset } from 'react-jplayer-utils';

import { setPlayHead } from '../../actions/actions';
import SeekBar from './seekBar';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  seekPercent: jPlayers[id].seekPercent,
});

const handlers = {
  movePlayHead: props => (bar, e) => {
    const offset = getElementOffset(bar);
    const x = e.clientX - offset.left;
    const w = bar.getBoundingClientRect().width;
    const percentage = 100 * (x / w);

    props.setPlayHead(props.id, percentage);
  },
};

const secondHandlers = {
  clickMoveBar: props => (bar, e) => props.movePlayHead(bar, e),
  touchMoveBar: props => (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    props.movePlayHead(bar, e.touches[0]);
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setPlayHead,
  }),
  withHandlers(handlers),
  withHandlers(secondHandlers),
)(SeekBar);
