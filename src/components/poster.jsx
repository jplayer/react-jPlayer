import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../util/constants';
import { mapStateToProps } from '../util/index';
import jPlayerConnect from '../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  src: jPlayers[id].media.poster,
});

const Poster = ({ src, attributes }) => (
  <img className={classes.POSTER} role="presentation" src={src} {...attributes} />
);

Poster.propTypes = {
  src: React.PropTypes.string,
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
};

export default connect(mapStateToProps)(jPlayerConnect(Poster, mapJPlayerProps));
