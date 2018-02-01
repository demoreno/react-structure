import { combineReducers } from 'redux';
import profile from './profile';
import users from './users';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    profile,
    users,
    form : formReducer
});