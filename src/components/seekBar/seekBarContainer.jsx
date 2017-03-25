import React from 'react';
import { connectWithId, getWidth, getOffset } from '../../util/index';
import { setPlayHead } from '../../actions/actions';
import Bar from '../bar';
import SeekBar from './seekBar';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  seekPercent: jPlayers[id].seekPercent,
  movePlayHead: (bar, dispatch, e) => {
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const percentage = 100 * (x / w);

    dispatch(setPlayHead(id, percentage));
  },
  children,
  attributes,
});

const mergeProps = ({ movePlayHead, seekPercent, children, attributes }, { dispatch }) => ({
  onClick: (bar, e) => movePlayHead(bar, dispatch, e),
  onTouchMove: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    movePlayHead(bar, dispatch, e.touches[0]);
  },
  seekPercent,
  children,
  attributes,
});

const SeekBarContainer = ({ onClick, onTouchMove, seekPercent, children, attributes }) => (
  <Bar clickMoveBar={onClick} touchMoveBar={onTouchMove}>
    <SeekBar seekPercent={seekPercent} {...attributes}>
      {children}
    </SeekBar>
  </Bar>
);

SeekBarContainer.defaultProps = {
  children: null,
};

SeekBarContainer.propTypes = {
  children: React.PropTypes.node,
  attributes: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onTouchMove: React.PropTypes.func.isRequired,
  seekPercent: React.PropTypes.number.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(SeekBarContainer);
