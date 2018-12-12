import {REQUEST_TICKETS, RECEIVE_TICKETS, REQUEST_TICKETS_ERROR} from '../actions/constants';
const _initialstate = {
    tickets:[]
}

const Tickets = (state=_initialstate,action) => {
	switch(action.type){
        case REQUEST_TICKETS :
        return state;

        case RECEIVE_TICKETS :
        return {...state, tickets:action.tickets}

        case REQUEST_TICKETS_ERROR :
        return state;

        default:
        return state;
    }
}

export default Tickets;