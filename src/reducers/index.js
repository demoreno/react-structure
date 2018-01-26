import { combineReducers } from 'redux';
import profile from './profile';
import users from './users';

export default combineReducers({
    profile,
    users
});