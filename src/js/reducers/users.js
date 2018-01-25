import { RECEIVE_USERS } from '../actions/actionsTypes';

export default (state = [], action) => {

    switch(action.type) {
      case RECEIVE_USERS:
          return action.users;
      break;

      default:      
        return state;
    }
}