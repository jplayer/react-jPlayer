import React from 'react';

import Event from './event';

const EventsInRealTime = ({ mediaEvents }) => (
  <div className="col-md-4">
    <h2>Media Events</h2>
    <p>Events that have been called in the last second</p>
    <div className="events">
      {Object.entries(mediaEvents).map(val => (
        <Event eventName={val[0]} callNumber={val[1]} />
      ))}
    </div>
  </div>
);

EventsInRealTime.defaultProps = {
  mediaEvents: {},
};

EventsInRealTime.propTypes = {
  mediaEvents: React.PropTypes.object,
};

export default EventsInRealTime;
