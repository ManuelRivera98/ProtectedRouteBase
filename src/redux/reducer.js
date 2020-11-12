// Types
import { LOGIN_SUCCESSFULLY, LOADING_LOGIN, ERROR_LOGIN } from './types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
        authenticated: true,
        loading: false,
        error: null,
      };
    case LOADING_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        error: action.payload,
        loading: false,
        authenticated: false,
      };
    default:
      return state
        ;
  }
};