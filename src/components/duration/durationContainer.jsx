import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  durationText: jPlayers[id].durationText,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.durationText !== null,
    renderComponent(Duration),
  ),
)(renderNothing(null));
