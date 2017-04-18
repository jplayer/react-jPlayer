import React from 'react';

import { classes } from '../../util/constants';

const Poster = ({ src, alt, attributes }) => (
  src !== null ? <img className={classes.POSTER} alt={alt} src={src} {...attributes} />
    : null
);

Poster.defaultProps = {
  alt: null,
  src: null,
};

Poster.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
};

export default Poster;
