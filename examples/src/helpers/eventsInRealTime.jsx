import React from 'react';

import Event from './event';

const EventsInRealTime = ({ eventCalls }) => (
  <div className="col-md-4">
    <h2>Media Events</h2>
    <p>Events that have been called in the last second</p>
    <div className="events">
      {Object.keys(eventCalls).map(key => (
        <Event key={key} eventName={key} callNumber={eventCalls[key]} />
      ))}
    </div>
  </div>
);

EventsInRealTime.defaultProps = {
  eventCalls: {},
};

EventsInRealTime.propTypes = {
  eventCalls: React.PropTypes.object,
};

export default EventsInRealTime;
