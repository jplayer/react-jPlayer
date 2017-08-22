/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { connectWithId } from 'react-jplayer-utils';
import { compose, lifecycle, setPropTypes, renderNothing } from 'recompose';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  error: jPlayers[id].error,
});

const propTypes = {
  error: PropTypes.shape({
    context: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
  }),
};

const lifecycleFunctions = {
  logError() {
    console.error(this.props.error);
  },
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.logError();
    }
  },
};

export default compose(
  connectWithId(mapStateToProps),
  setPropTypes(propTypes),
  lifecycle(lifecycleFunctions),
)(renderNothing(null));
