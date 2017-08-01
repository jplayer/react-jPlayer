import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { initialize } from '../../../actions/actions';

const initializeHOC = (JPlayer) => {
  class Initialize extends React.Component {
    componentWillMount() {
      this.props.dispatch(initialize(this.props.options));
    }
    render() {
      const { dispatch, ...props } = this.props;

      return <JPlayer {...props} />;
    }
  }

  Initialize.propTypes = {
    dispatch: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
  };

  return connect()(Initialize);
};

export default initializeHOC;
