import React from 'react';
import { connect } from 'react-redux';

import { classes } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { fullScreen } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  fullScreen: jPlayers[id].fullScreen,
});

const FullScreen = (props) => {
  const onFullScreenClick = () => {
    props.dispatch(fullScreen(!props.fullScreen, props.id));
  };
  return (
    <a className={classes.FULL_SCREEN} onClick={onFullScreenClick} {...props.attributes}>
      {props.children}
    </a>
  );
};

FullScreen.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  id: React.PropTypes.string,
  fullScreen: React.PropTypes.func,
  dispatch: React.PropTypes.func,
};

export default connect(mapStateToProps)(jPlayerConnect(FullScreen, mapJPlayerProps));
