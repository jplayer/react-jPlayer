import React from 'react';
import { Motion, spring } from 'react-motion';

const Playlist = (props) => {
  const animationHeight = props.shuffling ? props.minHeight : props.maxHeight;

  return (
    <Motion style={{ heightToInterpTo: spring(animationHeight, props.config) }} onRest={props.onRest}>
      {values =>
        <ul style={{ transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: '50% top' }}>
          {props.children}
        </ul>
            }
    </Motion>
  );
};

Playlist.defaultProps = {
  minHeight: 0,
  maxHeight: 1,
};

Playlist.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Playlist;
