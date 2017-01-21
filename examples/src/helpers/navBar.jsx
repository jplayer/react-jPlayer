/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';

import NavLink from './navLink';

const NavBar = ({ children }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">jPlayer Examples</a>
      </div>
      <ul className="nav navbar-nav">
        {React.Children.map(children, (child, i) => React.cloneElement(child, { tabId: i }))}
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default NavBar;
