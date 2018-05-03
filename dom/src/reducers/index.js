import { combineReducers } from 'redux';
import staffReducer from './staffReducer';
import statusReducer from './statusReducer';
import eventReducer from './eventReducer';

export default combineReducers({
    staff: staffReducer,
    statusMessage: statusReducer,
    events: eventReducer
});