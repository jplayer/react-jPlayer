import React from 'react';

import { classNames } from '../util/constants';

const Progress = ({ children, ...props }) => (
  <div className={classNames.PROGRESS} {...props}>
    {children}
  </div>
);

export default Progress;
