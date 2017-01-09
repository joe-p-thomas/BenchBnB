import { RECEIVE_ERRORS,
         RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultSession = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultSession, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
    return {
      currentUser: null,
      errors: action.errors
    };
    default:
      return state;
  }
};

export default sessionReducer;
