import { connectWithId } from 'react-jplayer-utils';
import { compose, branch, renderComponent, renderNothing } from 'recompose';

import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  nonSupported: jPlayers[id].mediaSettings.nonSupported,
});

export default compose(
  connectWithId(mapStateToProps),
  branch(
    props => props.nonSupported,
    renderComponent(BrowserUnsupported),
  ),
)(renderNothing(null));
