import {
    FETCH_EVENTS,
    FETCH_EVENT_HALL,
    FETCH_EVENT_ERROR,
    RESTORE_EVENT
} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return { ...state, errorMessage: "", events: action.payload};
        case FETCH_EVENT_HALL:
            return {...state, errorMessage: "", event: action.payload};
            case FETCH_EVENT_ERROR:
                return {...state, errorMessage: action.payload};
            case RESTORE_EVENT:
                return {};
        default:
            return state;
    }
}
