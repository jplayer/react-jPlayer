import React, { Component, PropTypes } from 'react';

class NavContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTabId: 0,
    };
  }
  getChildContext = () => ({
    setActiveTabId: id => this.setState({ activeTabId: id }),
    activeTabId: this.state.activeTabId,
  })
  render() {
    return <div>{this.props.children}</div>;
  }
}

NavContainer.childContextTypes = {
  activeTabId: PropTypes.number,
  setActiveTabId: PropTypes.func,
};

NavContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavContainer;
