import React from 'react';
import { connectWithId, getWidth, getOffset } from '../../util/index';
import { setPlayHead } from '../../actions/actions';
import BarEvents from '../../barEvents/barEvents';
import SeekBar from './seekBar';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  movePlayHead: (bar, dispatch, e) => {
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const percentage = 100 * (x / w);

    dispatch(setPlayHead(id, percentage));
  },
  attributes,
});

// eslint-disable-next-line no-unused-vars
const mergeProps = ({ movePlayHead, seekPercent, attributes }, { dispatch }) => ({
  onClick: (bar, e) => movePlayHead(bar, dispatch, e),
  onTouch: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlayHead(bar, dispatch, e.touches[0]);
  },
  seekPercent,
  attributes,
});

const SeekBarContainer = ({ onClick, onTouch, seekPercent, attributes }) => (
  <BarEvents clickMoveBar={onClick} touchMoveBar={onTouch}>
    <SeekBar seekPercent={seekPercent} {...attributes} />
  </BarEvents>
);

SeekBarContainer.defaultProps = {
  attributes: null,
};

SeekBarContainer.propTypes = {
  attributes: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
  onTouch: React.PropTypes.func.isRequired,
  seekPercent: React.PropTypes.number.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBarContainer);
