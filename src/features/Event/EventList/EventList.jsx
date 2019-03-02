import React, { Component } from "react";
import Moment from "react-moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventListItem from "./EventListItem";
class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </div>
    );
  }
}
export default EventList;
