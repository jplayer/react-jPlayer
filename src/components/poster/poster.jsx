import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import { classes } from '../../util/constants';

const Poster = ({ src }) => (
  <img className={classes.POSTER} alt="" src={src} />
);

Poster.defaultProps = {
  src: null,
};

Poster.propTypes = {
  src: PropTypes.string,
};

export default compose(
  branch(
    props => props.src,
    renderComponent(Poster),
  ),
)(renderNothing(null));

