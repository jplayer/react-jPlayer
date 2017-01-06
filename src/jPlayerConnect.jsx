import React from 'react';

export default (WrappedComponent, propsCallback) => {
  const jPlayerConnect = ({ jPlayers, attributes, dispatch, children }, { id }) => (
    <WrappedComponent
      {...propsCallback(jPlayers, id)} attributes={attributes}
      id={id} dispatch={dispatch}
    >
      {children}
    </WrappedComponent>
  );

  jPlayerConnect.contextTypes = {
    id: React.PropTypes.string,
  };

  jPlayerConnect.propTypes = {
    jPlayers: React.PropTypes.objectOf(React.PropTypes.any),
    attributes: React.PropTypes.objectOf(React.PropTypes.node),
    dispatch: React.PropTypes.func,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
    ]),
  };

  return jPlayerConnect;
};
