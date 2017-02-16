import React from 'react';
import { connectWithId, getHeight, getWidth, getOffset } from '../../util/index';
import { setVolume } from '../_actions/actions';
import BarEvents from '../barEvents';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValue.container';

const mapStateToProps = ({ jPlayers }, { uid }) => {
  const { verticalVolume } = jPlayers[uid];

  return {
    verticalVolume,
    moveVolumeBar: (bar, dispatch, e) => {
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
  };
};

// eslint-disable-next-line no-unused-vars
const mergeProps = ({ verticalVolume, moveVolumeBar }, { dispatch }, { uid, ...attributes }) => ({
  touchMoveVolumeBar: (bar, e) => {
    // Stop page scrolling
    e.preventDefault();

    moveVolumeBar(bar, dispatch, e.touches[0]);
  },
  clickMoveVolumeBar: (bar, e) => moveVolumeBar(bar, dispatch, e),
  ...attributes,
});

const VolumeBarContainer = ({ clickMoveVolumeBar, touchMoveVolumeBar, ...attributes }) => (
  <BarEvents clickMoveBar={clickMoveVolumeBar} touchMoveBar={touchMoveVolumeBar}>
    <VolumeBar {...attributes} />
  </BarEvents>
);

VolumeBarContainer.defaultProps = {
  children: (<VolumeBarValue />),
};

VolumeBarContainer.propTypes = {
  clickMoveVolumeBar: React.PropTypes.func.isRequired,
  touchMoveVolumeBar: React.PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarContainer);
