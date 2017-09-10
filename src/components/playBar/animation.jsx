import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import PlayBar from './playBar';

const Animation = props => (
  <Motion style={{ smoothWidth: spring(props.currentPercentAbsolute, [250]) }}>
    {values => (
      <PlayBar
        smoothWidth={values.smoothWidth}
        smoothPlayBar={props.smoothPlayBar}
        currentPercentRelative={props.currentPercentRelative}
      />
    )}
  </Motion>
);

Animation.propTypes = {
  currentPercentRelative: PropTypes.number.isRequired,
  currentPercentAbsolute: PropTypes.number.isRequired,
  smoothPlayBar: PropTypes.bool.isRequired,
};

export default Animation;
