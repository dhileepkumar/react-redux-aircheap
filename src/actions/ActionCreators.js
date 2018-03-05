import {REQUEST_AIRPORTS, RECEIVE_AIRPORTS, CHOOSE_AIRPORT, REQUEST_TICKETS} from './constants';
import AirCheapApi from '../apis/apis';

let ActionCreators = {
	 fetchAirports(origin, destination) {
		return (dispatch) => {
		  dispatch({ type: REQUEST_AIRPORTS });
		  AirCheapApi.fetchAirports().then(
			
			(airports) => {
				console.log('airports'+airports);
			dispatch({ type: RECEIVE_AIRPORTS, success:true, airports })},
			(error) => dispatch({ type: RECEIVE_AIRPORTS, success:false })
		  );
		};
	  },
	
	chooseAirport(target, airport) {
		return {
		  type: CHOOSE_AIRPORT,
		  target: target,
		  code: airport? airport.value : ''
		}
	  }
}

export default ActionCreators;


