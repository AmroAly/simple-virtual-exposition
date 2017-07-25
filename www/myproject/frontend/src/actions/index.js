import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
    BOOK_STAND,
    AUTH_ERROR,
    REMOVE_ERRORS,
    FETCH_EVENTS,
    FETCH_EVENT_HALL,
    FETCH_EVENT_ERROR,
    RESTORE_EVENT
} from './types';

const ROOT_URL = 'http://172.28.128.10';

export function bookStand({ email, admin, marketing_document, logo }, id) {
    return function(dispatch, getState) {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('admin', admin);
        formData.append('marketing_document', marketing_document);
        formData.append('logo', logo);

        axios.post(`${ROOT_URL}/api/book-stand/${id}`, formData)
            .then(response => {
                dispatch(removeErrors());

                browserHistory.push(`/events/${response.data}`);
            })
            .catch((error) =>  {
                const { data } = error.response;

                dispatch(authError(data));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function restoreEvent() {
    return {
        type: RESTORE_EVENT
    }
}

export function removeErrors() {
    return (dispatch) => {
        dispatch({ type: REMOVE_ERRORS });
    }
}

export function fetchEvents() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/api/events`)
            .then(response => {
                dispatch({
                    type: FETCH_EVENTS,
                    payload: response.data
                });
            });
    }
}

export function fetchEventHall(id) {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/api/events/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_EVENT_HALL,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_EVENT_ERROR,
                    payload: error.response.data
                });
            });
    }
}
