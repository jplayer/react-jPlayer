import React from 'react';
import classNames from 'classnames';

import { classes } from '../util/constants';

const Poster = ({ src, video, paused, currentTime, alt, ...attributes }) => {
  const posterClasses = classNames(classes.POSTER, {
    [classes.HIDDEN]: video && (!paused || currentTime !== 0),
  });
  return <img {...attributes} className={posterClasses} alt={alt} src={src} />;
};

Poster.defaultProps = {
  alt: null,
};

Poster.propTypes = {
  video: React.PropTypes.bool.isRequired,
  currentTime: React.PropTypes.number.isRequired,
  paused: React.PropTypes.bool.isRequired,
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Poster;
