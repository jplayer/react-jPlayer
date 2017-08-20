import PropTypes from 'prop-types';
import { connectWithId } from 'react-jplayer-utils';
import { compose, setPropTypes, branch, renderComponent, renderNothing } from 'recompose';

import BrowserUnsupported from './browserUnsupported';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  nonSupported: jPlayers[id].mediaSettings.nonSupported,
});

const propTypes = {
  nonSupported: PropTypes.bool.isRequired,
};

export default compose(
  connectWithId(mapStateToProps),
  setPropTypes(propTypes),
  branch(
    props => props.nonSupported,
    renderComponent(BrowserUnsupported),
  ),
)(renderNothing(null));
