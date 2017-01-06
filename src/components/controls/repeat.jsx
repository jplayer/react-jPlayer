import React from 'react';
import { connect } from 'react-redux';

import { classes, loopOptions } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { loop } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  loop: jPlayers[id].loop,
});

const Repeat = (props) => {
  const onRepeatClick = () => (
    props.loop === loopOptions.LOOP ? props.dispatch(loop(loopOptions.OFF, props.id))
                                    : props.dispatch(loop(loopOptions.LOOP, props.id))
  );
  return (
    <a className={classes.REPEAT} onClick={onRepeatClick} {...props.attributes}>
      {props.children}
    </a>
  );
};

Repeat.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.node),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  loop: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  id: React.PropTypes.string,
};

export default connect(mapStateToProps)(jPlayerConnect(Repeat, mapJPlayerProps));
