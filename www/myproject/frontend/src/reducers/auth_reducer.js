import {
    AUTH_ERROR,
    REMOVE_ERRORS
} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case REMOVE_ERRORS:
            return { ...state, error: '' };
        default:
            return state;
    }
}
