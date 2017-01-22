import React from 'react';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/JSONPretty.monikai.styl';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  jPlayerProps: jPlayers[id],
});

const PropsInRealTime = ({ jPlayerProps }) => (
  <div className="col-md-4">
    <h2>jPlayer Props</h2>
    <p>Properties that get passed into your players through props</p>
    <JSONPretty json={jPlayerProps} />
  </div>
);

PropsInRealTime.propTypes = {
  jPlayerProps: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PropsInRealTime);
