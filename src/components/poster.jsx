import React from 'react';

import { classes } from '../util/constants';

const Poster = ({ src, attributes }) => (
  <img {...attributes} className={classes.POSTER} role="presentation" src={src} />
);

Poster.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  src: React.PropTypes.string,
};

export default Poster;
