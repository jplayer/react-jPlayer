import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../util/constants';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  title: jPlayers[id].media.title,
});

const Title = ({ title, attributes }) => (
  <div className={classes.TITLE} {...attributes}>
    {title}
  </div>
);

Title.propTypes = {
  attributes: React.PropTypes.node,
  title: React.PropTypes.string,
};

export default connect(mapStateToProps)(jPlayerConnect(Title, mapJPlayerProps));
