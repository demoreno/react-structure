export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const REQUEST_USERS = 'REQUEST_USERS';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestProfile = () => ({type : REQUEST_PROFILE});
export const requestUsers = () => ({type : REQUEST_USERS});

export const receiveProfile = profile => ({type : RECEIVE_PROFILE, profile : profile});
export const receiveUsers = users => ({type : RECEIVE_USERS, users : users});