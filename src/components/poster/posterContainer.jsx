import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Poster from './poster';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  src: jPlayers[id].media.poster,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.src !== null,
    renderComponent(Poster),
  ),
)(renderNothing(null));
