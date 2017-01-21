/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

import WrappedPlayer from './wrappedPlayer';

const jPlayerConnect = (player, id) => class extends React.Component {
  render() {
    return <WrappedPlayer player={player} id={id} {...this.props} />;
  }
};

export default jPlayerConnect;
