import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ jPlayers }, { id }) => {
  const { [id]: current, ...others } = jPlayers;

  return {
    current,
    others,
  };
};

const JPlayerPropsAsJson = ({ current, others }) => (
  <div>
    <div className="col-md-6">
      <pre>
        { JSON.stringify(current, null, 2) }
      </pre>
    </div>
    <div className="col-md-6">
      <pre>
        { JSON.stringify(others, null, 2) }
      </pre>
    </div>
  </div>
);

JPlayerPropsAsJson.defaultProps = {
  show: false,
};

JPlayerPropsAsJson.propTypes = {
  current: React.PropTypes.object.isRequired,
  others: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(JPlayerPropsAsJson);
