import React from 'react';

export default (WrappedComponent, propsCallback) => {
  const jPlayerList = ({ jPlayers, attributes, dispatch, children }, { id }) =>
    <WrappedComponent {...propsCallback(jPlayers, id)} attributes={attributes} id={id} dispatch={dispatch}>{children}</WrappedComponent>;

  jPlayerList.contextTypes = {
    id: React.PropTypes.string,
  };

  return jPlayerList;
};
