import React from 'react';
import { connectWithId, getWidth, getOffset } from '../../util/index';
import { setPlayHead } from '../_actions/actions';
import BarEvents from '../barEvents';
import SeekBar from './seekBar';

const mapStateToProps = ({ jPlayers }, { uid }) => {
  const { seekPercent } = jPlayers[uid];

  return {
    seekPercent,
    movePlayHead: (bar, dispatch, e) => {
      const offset = getOffset(bar);
      const x = e.pageX - offset.left;
      const w = getWidth(bar);
      const percentage = 100 * (x / w);

      dispatch(setPlayHead(percentage, uid));
    },
  };
};

// eslint-disable-next-line no-unused-vars
const mergeProps = ({ seekPercent, movePlayHead }, { dispatch }, { uid, ...attributes }) => ({
  touchMovePlayHead: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlayHead(bar, dispatch, e.touches[0]);
  },
  clickMovePlayHead: (bar, e) => movePlayHead(bar, dispatch, e),
  seekPercent,
  ...attributes,
});

const SeekBarContainer = ({ clickMovePlayHead, touchMovePlayHead, seekPercent, ...attributes }) => (
  <BarEvents clickMoveBar={clickMovePlayHead} touchMoveBar={touchMovePlayHead}>
    <SeekBar seekPercent={seekPercent} {...attributes} />
  </BarEvents>
);

SeekBarContainer.propTypes = {
  clickMovePlayHead: React.PropTypes.func.isRequired,
  touchMovePlayHead: React.PropTypes.func.isRequired,
  seekPercent: React.PropTypes.number.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBarContainer);
