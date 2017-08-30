import { connectWithId, formatArtistAndTitle } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Title from './title';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  title: formatArtistAndTitle(jPlayers[id].media.artist, jPlayers[id].media.title),
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.title !== '',
    renderComponent(Title),
  ),
)(renderNothing(null));
