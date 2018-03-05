import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/appreducers';

const logger = (store) => (next) => (action) => {
	if(typeof action !== "function"){
		console.log('dispatchibng : ',action);
	}
	return next(action);
}

const store = createStore(
	reducers,
	applyMiddleware(logger, thunk)
);

export default store;