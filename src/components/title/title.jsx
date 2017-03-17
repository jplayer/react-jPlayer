import React from 'react';

import { classes } from '../../util/constants';

const Title = ({ artist, title, children, attributes }) => (
  <div {...attributes} className={classes.TITLE}>
    {children === null ? `${artist} - ${title}` : children}
  </div>
);

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  attributes: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  artist: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default Title;
