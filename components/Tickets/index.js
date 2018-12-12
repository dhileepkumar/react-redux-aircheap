import React, {Component} from 'react';

const dateConfig = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

class Tickets extends Component{
    render(){

        let {ticket} = this.props;
        console.log('ticket',ticket)
        let departureTime = new Date(ticket.segment[0].departureTime).toLocaleDateString("en-US",dateConfig);
        let arrivalTime = new Date(ticket.segment[ticket.segment.length-1].arrivalTime).toLocaleDateString("en-US",dateConfig);
        let stops;
        if(ticket.segment.length === 2){
            stops = '1 stop';
        } else if(ticket.segment.length-1 > 1) {
            stops = ticket.segment.length-1 + ' stops';
        }

        return <div className='ticket'>
        <span className="ticket-company">{ticket.company}</span>
        <span className="ticket-location">
          <strong>{ticket.segment[0].origin}</strong>{' '}
          <small>{departureTime}</small>
        </span>
        <span className="ticket-separator">
        &#8680;
        </span>
        <span className="ticket-location">
          <strong>{ticket.segment[ticket.segment.length-1].destination}</strong>{' '}
          <small>{arrivalTime}</small>
        </span>
        <span className="ticket-connection">
          {stops}
        </span>
        <span className="ticket-points">
          <button>{ticket.points} points</button>
        </span>
      </div>
    }
}

export default Tickets;