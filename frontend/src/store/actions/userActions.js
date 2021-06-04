import axios from 'axios';

import { encryptLocalStorage, clearEncryptedLocalStorage } from '../../utils/encryption.js';

import {
  BACKEND_URL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  CLEAR_BOOKS
} from '../constants.js';

export const login = (email, password) => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type':'application/json'
    },
    withCredentials: true
  }

  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(`${BACKEND_URL}/user/login`, {email, password}, config);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    encryptLocalStorage('userKey', data);
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAILURE, payload: err.response })
  }

}

export const logout = () => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type':'application/json'
    },
    withCredentials: true
  }

  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    await axios.post(`${BACKEND_URL}/user/logout`, {}, config);
    dispatch({ type: USER_LOGOUT_SUCCESS });
    dispatch({ type: CLEAR_BOOKS });
    clearEncryptedLocalStorage();
  } catch (err) {
    dispatch({ type: USER_LOGOUT_FAILURE, payload: err.response })
  }
}