import { ActionTypes } from '../action-types/index';
import { Action } from '../action-creators/index';

import {sampleData} from '../../api/sampleData';

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
}

interface eventData {
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
}
interface EventsState {
    events: eventData[]
};

const initialState: any = { events: sampleData};

export const eventReducer = (state = initialState, {type, payload}: Action) =>{
    
    switch (type) {
        case ActionTypes.CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case ActionTypes.UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter((evt: any) => evt.id !== payload.id), payload]
            }
        case ActionTypes.DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter((evt: any) => evt.id !== payload.id)]
            }
        default:
            return state
    }
};