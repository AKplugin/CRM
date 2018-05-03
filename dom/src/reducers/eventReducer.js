import { FETCH_USER, LOGOUT_USER, FETCH_STAFF, GET_SELECTED_TEACHER } from '../types';
import jwt from 'jsonwebtoken';

export default function (state = { statusMsg: '', listOfEvents: [] }, action) {
    switch (action.type) {
        case 'FETCH_EVENT':
            return {
                ...action.payload
            };
        default:
            return state;
    }
}