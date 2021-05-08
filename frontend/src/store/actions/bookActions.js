import axios from 'axios';

import {
  BACKEND_URL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from '../constants.js';

export const getBooks = () => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type':'application/json'
    }
  }

}