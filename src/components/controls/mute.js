import React from 'react';
import { connect } from 'react-redux';

import { classNames } from '../../util/constants';
import { mapStateToProps } from '../../util/index';
import { mute } from '../../actions/jPlayerActions';
import jPlayerConnect from '../../jPlayerConnect';

const mapJPlayerProps = (jPlayers, id) => ({
  muted: jPlayers[id].muted,
});

const Mute = (props) => {
  const onMuteClick = () => props.dispatch(mute(!props.muted, props.id));
  return <a className={classNames.MUTE} onClick={onMuteClick} {...props.attributes}>{props.children}</a>;
};

export default connect(mapStateToProps)(jPlayerConnect(Mute, mapJPlayerProps));
