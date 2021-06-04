import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  CLEAR_USER
} from '../constants.js';

export const userDetailsReducer = (state = {}, action) => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userAuth: true, userInfo: action.payload }
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload }
    case USER_LOGOUT_REQUEST:
      return {...state, loading: true }
    case USER_LOGOUT_SUCCESS:
      return { loading: false, userAuth: false }
    case USER_LOGOUT_FAILURE:
      return { loading: false, error: action.payload }
    case CLEAR_USER:
      return { userAuth: false }
    default: 
      return state;
  }
}
