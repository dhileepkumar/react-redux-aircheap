import {RECEIVE_AIRPORTS, RECEIVE_AIRPORTS_ERROR} from '../actions/constants';
const _initialstate = {
	airports:[],
	error:'',
}
const airports = (state=_initialstate,action) => {
	switch(action.type){
		case RECEIVE_AIRPORTS:
		return  {...state, airports:action.payload.airports};

		case RECEIVE_AIRPORTS_ERROR:
		return  Object.assign({}, state, action.payload);
		
		default:
		return state;
	}
}

export default airports;