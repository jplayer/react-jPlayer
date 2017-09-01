import React from 'react';
import PropTypes from 'prop-types';

const Bar = props => (
  React.cloneElement(React.Children.only(props.children), {
    onClick: props.onClick,
    onMouseDown: props.onMouseDown,
    onTouchStart: props.onTouchStart,
    ref: props.setBar,
  })
);

Bar.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  setBar: PropTypes.func.isRequired,
};

export default Bar;
