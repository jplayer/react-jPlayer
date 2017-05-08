import React from 'react';
import PropTypes from 'prop-types';

import { classes } from '../../util/constants';

const Poster = ({ src, alt, ...attributes }) => (
  src !== '' ? <img className={classes.POSTER} alt={alt} src={src} {...attributes} />
    : null
);

Poster.defaultProps = {
  alt: null,
  src: null,
};

Poster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Poster;
