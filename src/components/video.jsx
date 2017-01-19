import React from 'react';

import { defaultOptions } from '../util/constants';
import Media from '../containers/media';

const Video = ({ children, require, onClick, title, ...attributes }) => (
  require ?
    <Media>
      <video
        {...attributes} onClick={onClick} title={title}
      >
        {children}
      </video>
    </Media>
  : null
);

Video.defaultProps = {
  children: null,
  onClick: null,
  require: false,
  title: defaultOptions.media.title,
};

Video.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  require: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  title: React.PropTypes.string,
};

export default Video;
