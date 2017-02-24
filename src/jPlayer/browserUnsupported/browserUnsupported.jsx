import React from 'react';

const BrowserUnsupported = ({ foundSupported, children }) => (
  foundSupported ? null : children
);

BrowserUnsupported.propTypes = {
  children: React.PropTypes.node.isRequired,
  foundSupported: React.PropTypes.bool.isRequired,
};

export default BrowserUnsupported;
