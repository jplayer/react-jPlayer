import React from 'react';

import { classes } from '../../util/constants';

const Poster = ({ src, alt, attributes }) =>
  <img {...attributes} className={classes.POSTER} alt={alt} src={src} />;

Poster.defaultProps = {
  alt: null,
  attributes: null,
};

Poster.propTypes = {
  attributes: React.PropTypes.node,
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Poster;
