import React from 'react';

export default (WrappedComponent, propsCallback) => {
  const jPlayerList = ({ jPlayers, attributes, dispatch, children }, { id }) => (
    <WrappedComponent
      {...propsCallback(jPlayers, id)} attributes={attributes}
      id={id} dispatch={dispatch}
    >
      {children}
    </WrappedComponent>
  );

  jPlayerList.contextTypes = {
    id: React.PropTypes.string,
  };

  jPlayerList.propTypes = {
    jPlayers: React.PropTypes.shape,
    attributes: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    children: React.PropTypes.element,
  };

  return jPlayerList;
};
