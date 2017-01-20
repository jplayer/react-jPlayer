import React from 'react';

import { defaultOptions } from '../util/constants';  
import Media from '../containers/media';

const Audio = ({ children, require, title, ...attributes }) => (
  require ?
    <Media>
      <audio {...attributes} title={title}>
        {children}
      </audio>
    </Media>
  : null
);

Audio.defaultProps = {
  children: null,
  title: defaultOptions.media.title,
};

Audio.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  require: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
};

export default Audio;
