import PropTypes from 'prop-types';

import { formats } from './constants';

const formatPropTypes = {};

Object.keys(formats).forEach((key) => {
  formatPropTypes[key] = PropTypes.string;
});

export default formatPropTypes;
