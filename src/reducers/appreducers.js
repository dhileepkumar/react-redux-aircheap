import {combineReducers} from 'redux';
import airports from './airports';
import route from './routes';

const rootReducer = combineReducers({
	airports,
	route
});

export default rootReducer;