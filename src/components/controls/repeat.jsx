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
    <button className={classes.REPEAT} onClick={onRepeatClick} {...props.attributes}>
      {props.children}
    </button>
  );
};

Repeat.propTypes = {
  children: React.PropTypes.element,
  attributes: React.PropTypes.node,
  loop: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  id: React.PropTypes.string,
};

export default connect(mapStateToProps)(jPlayerConnect(Repeat, mapJPlayerProps));
