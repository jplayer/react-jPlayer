/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';

const NavLink = ({ tabId, children, ...attributes }, { setActiveTabId, activeTabId }) => {
  const className = tabId === activeTabId ? 'active' : null;

  return (
    <li {...attributes} className={className}>
      <a href="#" onClick={() => setActiveTabId(tabId)}>{children}</a>
    </li>
  );
};

NavLink.contextTypes = {
  activeTabId: React.PropTypes.number,
  setActiveTabId: React.PropTypes.func,
};

NavLink.defaultProps = {
  tabId: 0,
};

NavLink.propTypes = {
  children: React.PropTypes.string.isRequired,
  tabId: React.PropTypes.number,
};

export default NavLink;
