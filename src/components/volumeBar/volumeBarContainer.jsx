import React from 'react';
import PropTypes from 'prop-types';
import { connectWithId, getElementOffset } from 'react-jplayer-utils';

import { setVolume } from '../../actions/actions';
import Bar from '../bar';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  moveVolumeBar: (bar, dispatch, e) => {
    const { verticalVolume } = jPlayers[id];
    const offset = getElementOffset(bar);
    const w = bar.getBoundingClientRect().width;
    const h = bar.getBoundingClientRect().height;
    const y = (h - e.pageY) + offset.top;
    const x = e.pageX - offset.left;

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
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  onTouchMove: PropTypes.func.isRequired,
};

export default connectWithId(mapStateToProps, null, mergeProps)(VolumeBarContainer);
