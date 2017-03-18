import React from 'react';

import { classes } from '../../util/constants';

const Poster = ({ src, alt, attributes }) =>
  <img className={classes.POSTER} alt={alt} src={src} {...attributes} />;

Poster.defaultProps = {
  alt: null,
};

Poster.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Poster;
