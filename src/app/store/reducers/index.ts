import { combineReducers } from 'redux';
import { eventReducer } from './events';

// just dummy reducer thee is not an error while reducers are not created yet.
export const rootReducer = combineReducers({
	event: eventReducer
});