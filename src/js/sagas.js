import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_PROFILE, receiveProfile, REQUEST_USERS, receiveUsers } from './actions';
import { getInfo, getUsers } from './api';

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

function* rootSaga() {
    yield [
        takeLatest(REQUEST_PROFILE, fetchProfile),        
        takeLatest(REQUEST_USERS, fetchUsers)        
    ]    
}

export default rootSaga;