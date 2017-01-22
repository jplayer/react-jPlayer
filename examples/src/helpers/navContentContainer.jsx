import React from 'react';

const NavContentContainer = ({ children }, { activeTabId }) => (
  <div>
    { React.Children.map(children, (child, i) =>
      (activeTabId === i ? React.Children.only(child) : null))
    }
  </div>
);

NavContentContainer.contextTypes = {
  activeTabId: React.PropTypes.number,
};

NavContentContainer.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};

export default NavContentContainer;
