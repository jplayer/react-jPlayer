import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../../util/index';
import { setVolume } from '../../../actions/actions';
import Bar from '../bar';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  moveVolumeBar: (bar, dispatch, e) => {
    const { verticalVolume } = jPlayers[id];
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const y = (getHeight(bar) - e.pageY) + offset.top;
    const h = getHeight(bar);

    if (verticalVolume) {
      dispatch(setVolume(id, y / h));
    } else {
      dispatch(setVolume(id, x / w));
    }
  },
  children,
  attributes,
});

const mergeProps = ({ moveVolumeBar, children, attributes }, { dispatch }) => ({
  onClick: (bar, e) => moveVolumeBar(bar, dispatch, e),
  onTouchMove: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    moveVolumeBar(bar, dispatch, e.touches[0]);
  },
  children,
  attributes,
});

const VolumeBarContainer = ({ onClick, onTouchMove, children, attributes }) => (
  <Bar clickMoveBar={onClick} touchMoveBar={onTouchMove}>
    <VolumeBar {...attributes}>
      {children}
    </VolumeBar>
  </Bar>
);

VolumeBarContainer.defaultProps = {
  children: (<VolumeBarValue />),
};

VolumeBarContainer.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
  onTouchMove: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarContainer);
