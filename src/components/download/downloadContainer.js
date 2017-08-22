import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Download from './download';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  free: jPlayers[id].media.free,
  url: jPlayers[id].src,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.free,
    renderComponent(Download),
  ),
)(renderNothing(null));
