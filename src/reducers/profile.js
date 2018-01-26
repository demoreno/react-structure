import { RECEIVE_PROFILE }  from '../actions/actionsTypes';

export default (state = [], action) => {
    switch(action.type) {
      case RECEIVE_PROFILE:
          return Object.assign({}, state, action.profile);
      break;
      
      default:      
        return state;
    }
}