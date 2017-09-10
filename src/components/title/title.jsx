import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import { classes } from '../../util/constants';

const Title = ({ title }) => (
  <div className={classes.TITLE}>
    {title}
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default compose(
  branch(
    props => props.title,
    renderComponent(Title),
  ),
)(renderNothing(null));
