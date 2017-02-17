import React from 'react';

import { classes } from '../../util/constants';

const Poster = ({ src, alt, ...attributes }) =>
  <img {...attributes} className={classes.POSTER} alt={alt} src={src} />;

Poster.defaultProps = {
  alt: null,
};

Poster.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Poster;
