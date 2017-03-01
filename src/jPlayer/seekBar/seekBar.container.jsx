import React from 'react';
import { connectWithId, getWidth, getOffset } from '../../util/index';
import { setPlayHead } from '../_actions/actions';
import BarEvents from '../barEvents';
import SeekBar from './seekBar';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  seekPercent: jPlayers[uid].seekPercent,
  movePlayHead: (bar, dispatch, e) => {
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const percentage = 100 * (x / w);

    dispatch(setPlayHead(percentage, uid));
  },
});

// eslint-disable-next-line no-unused-vars
const mergeProps = ({ movePlayHead, seekPercent }, { dispatch }) => ({
  onClick: (bar, e) => movePlayHead(bar, dispatch, e),
  onTouch: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlayHead(bar, dispatch, e.touches[0]);
  },
  seekPercent,
});

const SeekBarContainer = ({ onClick, onTouch, seekPercent, attributes }) => (
  <BarEvents clickMoveBar={onClick} touchMoveBar={onTouch}>
    <SeekBar seekPercent={seekPercent} attributes={attributes} />
  </BarEvents>
);

SeekBarContainer.defaultProps = {
  attributes: null,
};

SeekBarContainer.propTypes = {
  attributes: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
  onTouch: React.PropTypes.func.isRequired,
  seekPercent: React.PropTypes.number.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBarContainer);
