/* Ignore this file as it is only for showing jPlayer properties and events in real time */
import React from 'react';

import JPlayerPropsAsJson from './jPlayerPropsAsJson';

const StatusWrapper = ({ title, children, id }) => (
  <div className="example-wrapper">
    <h1>{title}</h1>
    <div className="example-controls">
      <button
        className="btn btn-default"
      >
        Status
      </button>
    </div>
    {children}
    <JPlayerPropsAsJson id={id} />
  </div>
);

StatusWrapper.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};

export default StatusWrapper;
