import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_PROFILE, REQUEST_USERS, DELETE_USERS} from './actions/actionsTypes';
import { receiveProfile, receiveUsers } from './actions/actionCreators';
import { getInfo, getUsers, removeUser } from './api';

function* fetchProfile(action){    
   try {
        const response = yield call(getInfo);
        yield put(receiveProfile(response.data)); 
   } catch (e) {
        console.log(e);
   }
}

function* fetchUsers(action){
    try {        
        const response = yield call(getUsers);
        yield put(receiveUsers(response.data));       
   } catch (e) {
        console.log(e);
   }
}

function* deleteUsers(action) {
    try{
        const response = yield call(removeUser);
        yield put(receiveUsers(response))
    }catch (e){
        console.log(e);
    }
}

function* rootSaga() {
    yield [
        takeLatest(REQUEST_PROFILE, fetchProfile),        
        takeLatest(REQUEST_USERS, fetchUsers),
        takeLatest(DELETE_USERS, deleteUsers)
    ]    
}

export default rootSaga;