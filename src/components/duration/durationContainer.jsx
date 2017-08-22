import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import Duration from './duration';
import { defaultStatus } from '../../util/constants';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  durationText: jPlayers[id].durationText,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.durationText !== defaultStatus.durationText,
    renderComponent(Duration),
  ),
)(renderNothing(null));
