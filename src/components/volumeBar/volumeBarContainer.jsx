import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../util/index';
import { setVolume } from '../../actions/actions';
import BarEvents from '../../barEvents/barEvents';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
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
  attributes,
});

const mergeProps = ({ moveVolumeBar, attributes }, { dispatch }) => ({
  onClick: (bar, e) => moveVolumeBar(bar, dispatch, e),
  onTouch: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    moveVolumeBar(bar, dispatch, e.touches[0]);
  },
  attributes,
});

const VolumeBarContainer = ({ onClick, onTouch, children, attributes }) => (
  <BarEvents clickMoveBar={onClick} touchMoveBar={onTouch}>
    <VolumeBar {...attributes}>
      {children}
    </VolumeBar>
  </BarEvents>
);

VolumeBarContainer.defaultProps = {
  attributes: null,
  children: (<VolumeBarValue />),
};

VolumeBarContainer.propTypes = {
  attributes: React.PropTypes.object,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
  onTouch: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarContainer);
