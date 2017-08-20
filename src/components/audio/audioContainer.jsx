import PropTypes from 'prop-types';
import { connectWithId } from 'react-jplayer-utils';
import { compose, setPropTypes, branch, renderComponent, renderNothing } from 'recompose';

import Audio from './audio';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  require: !jPlayers[id].mediaSettings.video,
});

const propTypes = {
  require: PropTypes.bool.isRequired,
};

export default compose(
  connectWithId(mapStateToProps),
  setPropTypes(propTypes),
  branch(
    props => props.require,
    renderComponent(Audio),
  ),
)(renderNothing(null));
