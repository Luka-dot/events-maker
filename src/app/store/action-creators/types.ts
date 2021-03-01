import { CreateEventAction, UpdateEventAction, DeleteEventAction } from './events';

export enum ActionTypes {
    createEvent,
    updateEvent,
    deleteEvent
};

export type Action = CreateEventAction | UpdateEventAction | DeleteEventAction;