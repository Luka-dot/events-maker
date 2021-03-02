import { combineReducers } from 'redux';
import { eventReducer } from './events';

const rootReducer = combineReducers({
	event: eventReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;