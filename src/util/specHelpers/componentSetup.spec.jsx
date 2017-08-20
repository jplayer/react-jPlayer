import React from 'react';
import { shallow } from 'enzyme';

export default (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    props,
    wrapper,
  };
};
