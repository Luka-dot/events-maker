import { combineReducers } from 'redux';
import { eventReducer } from './events';

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
};

export interface eventData {
    id: string; 
    title: string; 
    date: string; 
    category: string; 
    description: string; 
    city: string; 
    venue: string; 
    hostedBy: string; 
    hostPhotoURL: string; 
    attendees: attendeeData[]
};
interface EventsState {
    events: eventData[]
};
export interface StoreState {
	event: eventData[]
}

const rootReducer = combineReducers<StoreState>({
	event: eventReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;