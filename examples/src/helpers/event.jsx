import React from 'react';

const Event = ({ eventName, callNumber }) => (
  <div className={callNumber > 0 ? 'event-called' : null}>
    {`${eventName} (${callNumber})`}
  </div>
);

Event.defaultProps = {
  callNumber: 0,
};

Event.propTypes = {
  callNumber: React.PropTypes.number,
  eventName: React.PropTypes.string.isRequired,
};

export default Event;
