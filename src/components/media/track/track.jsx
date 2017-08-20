import React from 'react';
import PropTypes from 'prop-types';

const Track = props => (
  <track
    default={props.default}
    kind={props.kind}
    src={props.src}
    label={props.label}
    srcLang={props.srclang}
  />
);

Track.defaultProps = {
  default: null,
  kind: null,
  label: null,
  srclang: null,
};

Track.propTypes = {
  default: PropTypes.bool,
  kind: PropTypes.string,
  src: PropTypes.string.isRequired,
  label: PropTypes.string,
  srclang: PropTypes.string,
};

export default Track;
