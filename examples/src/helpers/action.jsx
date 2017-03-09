import React from 'react';

const Action = ({ key }) => (
  <li><strong>{key}</strong> test</li>
);

Action.propTypes = {
  key: React.PropTypes.string.isRequired,
};

export default Action;
