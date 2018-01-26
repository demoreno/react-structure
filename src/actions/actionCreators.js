import * as actionsTypes from './actionsTypes';

export const requestProfile = () => ({type : actionsTypes.REQUEST_PROFILE});
export const receiveProfile = profile => ({type : actionsTypes.RECEIVE_PROFILE, profile});

export const requestUsers = () => ({type : actionsTypes.REQUEST_USERS});
export const receiveUsers = users => ({type : actionsTypes.RECEIVE_USERS, users});
export const deleteUsers = users => ({type : actionsTypes.DELETE_USERS, users});