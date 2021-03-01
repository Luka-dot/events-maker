import { ActionTypes } from '../action-types/index';
import { Action } from '../action-creators/index';

//temp
import {sampleData} from '../../api/sampleData';

const initialState = {
    events: sampleData
};

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
                events: [...state.events.filter(evt => evt.id !== payload.id), payload]
            }
        case ActionTypes.DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload.id)]
            }
        default:
            return state
    }
};