import { connectWithId } from 'react-jplayer-utils';
import { compose, withProps } from 'recompose';

import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  require: !jPlayers[id].mediaSettings.video,
  src: jPlayers[id].src,
});

const createProps = ({ src }) => {
  if (!src) {
    return {
      src: [],
    };
  }

  if (!Array.isArray(src)) {
    return {
      src: [src],
    };
  }

  return {
    src,
  };
};

export default compose(
  connectWithId(mapStateToProps),
  withProps(createProps),
)(Audio);
