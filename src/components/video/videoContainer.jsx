import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Video from './video';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  require: jPlayers[id].mediaSettings.video,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.require,
    renderComponent(Video),
  ),
)(renderNothing(null));
