import { ActionTypes } from '../action-types/index';

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
};

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
};

export interface CreateEventAction {
    type: ActionTypes.CREATE_EVENT;
    payload: eventData
};

export interface UpdateEventAction {
    type: ActionTypes.UPDATE_EVENT;
    payload: eventData
};

export interface DeleteEventAction {
    type: ActionTypes.DELETE_EVENT;
    payload: eventData
};

export const createEvent = (event: eventData): CreateEventAction => {
    return {
        type: ActionTypes.CREATE_EVENT,
        payload: event
    }
};

export const updateEvent = (event: eventData): UpdateEventAction => {
    return {
        type: ActionTypes.UPDATE_EVENT,
        payload: event
    }
};

export const deleteEvent = (event: eventData): DeleteEventAction => {
    return {
        type: ActionTypes.DELETE_EVENT,
        payload: event
    }
};