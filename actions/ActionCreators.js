import {REQUEST_AIRPORTS, RECEIVE_AIRPORTS, CHOOSE_AIRPORT,RECEIVE_TICKETS, REQUEST_TICKETS, RECEIVE_AIRPORTS_ERROR} from './constants';
import AirCheapApi from '../apis/apis';

let ActionCreators = {
	 fetchAirports(origin, destination) {
		return (dispatch) => {
		  dispatch({ type: REQUEST_AIRPORTS });
		  AirCheapApi.fetchAirports().then(
				(airports) => {
					console.log('airports'+airports);	
					dispatch({ type: RECEIVE_AIRPORTS, success:true, payload:{airports:airports} })
				},
				(error) => { 
					console.log(error);
					dispatch({ type: RECEIVE_AIRPORTS_ERROR, success:false, payload:{error:error.toString()} })} 
		  );
		};
	  },
	

	chooseAirport(target, airport) {
		return {
		  type: CHOOSE_AIRPORT,
		  target: target,
		  code: airport? airport.value : ''
		}
	},

	fetchTickets(origin, destination){

		return (dispatch) => {
				dispatch({type:REQUEST_TICKETS})
				AirCheapApi.fetchTickets(origin, destination).then(
						(tickets)=>{
							console.log('tickets', tickets);
								dispatch({type:RECEIVE_TICKETS, success:true, tickets})
							},
						(error)=>{
							dispatch({type:RECEIVE_AIRPORTS_ERROR, success:false, payload:{error:error}})
						},
				)
			}
	}
}

export default ActionCreators;


