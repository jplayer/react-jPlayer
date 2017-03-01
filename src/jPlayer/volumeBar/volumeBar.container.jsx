import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../util/index';
import { setVolume } from '../_actions/actions';
import BarEvents from '../barEvents';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValue.container';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  moveVolumeBar: (bar, dispatch, e) => {
    const { verticalVolume } = jPlayers[uid];
    const offset = getOffset(bar);
    const x = e.pageX - offset.left;
    const w = getWidth(bar);
    const y = (getHeight(bar) - e.pageY) + offset.top;
    const h = getHeight(bar);

    if (verticalVolume) {
      dispatch(setVolume(y / h, uid));
    } else {
      dispatch(setVolume(x / w, uid));
    }
  },
});

const mergeProps = ({ moveVolumeBar }, { dispatch }) => ({
  onClick: (bar, e) => moveVolumeBar(bar, dispatch, e),
  onTouch: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    moveVolumeBar(bar, dispatch, e.touches[0]);
  },
});

const VolumeBarContainer = ({ onClick, onTouch, children, attributes }) => (
  <BarEvents clickMoveBar={onClick} touchMoveBar={onTouch}>
    <VolumeBar attributes={attributes}>
      {children}
    </VolumeBar>
  </BarEvents>
);

VolumeBarContainer.defaultProps = {
  children: (<VolumeBarValue />),
  attributes: null,
};

VolumeBarContainer.propTypes = {
  attributes: React.PropTypes.node,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
  onTouch: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarContainer);
