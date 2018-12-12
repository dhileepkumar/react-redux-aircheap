import {CHOOSE_AIRPORT} from '../actions/constants';
import update from 'react-addons-update';

const initialState = {
	origin:'',
	destination:'',
	tickets:'',
	error:'',
}

const route = (state=initialState,action) => {
	switch(action.type){
		case CHOOSE_AIRPORT:
		return  update(state,{[action.target]:{$set: action.code}});
		
		default:
		return state;
	}
}

export default route;