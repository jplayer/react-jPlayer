/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';

const NavBar = ({ children }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand">jPlayer Examples</div>
      </div>
      <ul className="nav navbar-nav">
        {React.Children.map(children, (child, i) => React.cloneElement(child, { tabId: i }))}
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};

export default NavBar;
