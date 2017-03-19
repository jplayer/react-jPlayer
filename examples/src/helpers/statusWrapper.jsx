/* Ignore this file as it is only for showing jPlayer properties and events in real time */
import React from 'react';

import PropsInRealTime from './propsInRealTime';
import EventsInRealTime from './eventsInRealTime';

class StatusWrapper extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element),
      ]).isRequired,
    };
  }
  constructor() {
    super();

    this.state = {
      eventCalls: {
        onAbort: 0,
        onCanPlay: 0,
        onCanPlayThrough: 0,
        onDurationChange: 0,
        onEmptied: 0,
        onEncrypted: 0,
        onEnded: 0,
        onError: 0,
        onLoadedData: 0,
        onLoadedMetadata: 0,
        onLoadStart: 0,
        onPause: 0,
        onPlay: 0,
        onPlaying: 0,
        onProgress: 0,
        onRateChange: 0,
        onSeeked: 0,
        onSeeking: 0,
        onStalled: 0,
        onSuspend: 0,
        onTimeUpdate: 0,
        onVolumeChange: 0,
        onWaiting: 0,
      },
    };
    this.events = {};
    this.eventTimeouts = [];

    Object.keys(this.state.eventCalls).forEach((eventName) => {
      this.events[eventName] = () => {
        this.setState(prevState => (
          this.modifyEventCalls(prevState.eventCalls, eventName, true)
        ), () => (
          this.eventTimeouts.push(this.removeEventCallTimeout(eventName))
        ));
      };
    });
  }
  componentWillUnmount() {
    this.eventTimeouts.forEach(timeoutNumber => clearTimeout(timeoutNumber));
  }
  removeEventCallTimeout = eventName => (
    setTimeout(() => this.setState(prevState => (
      this.modifyEventCalls(prevState.eventCalls, eventName, false)
    )), 1000)
  )
  modifyEventCalls = (eventCalls, eventName, increment) => {
    let callNumber = eventCalls[eventName];
    callNumber = increment ? callNumber + 1 : callNumber - 1;
    return {
      eventCalls: {
        ...eventCalls,
        [eventName]: callNumber,
      },
    };
  };
  render() {
    return (
      <div className="example-wrapper">
        {React.cloneElement(React.Children.only(this.props.children), {
          events: this.events,
        })}
        <div className="container-fluid">
          <div className="row">
            <PropsInRealTime id={this.props.id} />
            <EventsInRealTime id={this.props.id} eventCalls={this.state.eventCalls} />
          </div>
        </div>
      </div>
    );
  }
}

export default StatusWrapper;
