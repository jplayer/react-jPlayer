import { connect } from 'react-redux';
import { connect as jPlayerConnect } from 'react-jplayer-utils';

import * as actions from '../actions/actions';

const Connect = (jPlayer, options) => {
  const ConnectedPlayer = connect(state => state, {
    ...actions,
  })(jPlayer);

  return jPlayerConnect(jPlayer, { options }, ConnectedPlayer);
};

export default Connect;
