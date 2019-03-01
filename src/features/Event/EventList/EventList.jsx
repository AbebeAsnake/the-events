import React, { Component } from 'react'
import Moment from 'react-moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventListItem from './EventListItem'
class EventList extends Component {
  render() {
    const {events} =this.props;
    const dateToFormat = '1976-04-19T12:59-0500';
    const notify = () => toast("Wow so easy !");

    return ( 
     
      <div>
       <h1>Event List</h1>
       <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
            <Moment>{dateToFormat}</Moment>       {events.map((event)=>(
       <EventListItem key={event.id} event={event}/>

       ))}
      
      </div>
    )
  }
}
export default EventList;
