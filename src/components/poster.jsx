import React from 'react';

import { classes } from '../util/constants';

const Poster = ({ src, attributes }) => (
  <img className={classes.POSTER} role="presentation" src={src} {...attributes} />
);

Poster.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  src: React.PropTypes.string,
};

export default Poster;
