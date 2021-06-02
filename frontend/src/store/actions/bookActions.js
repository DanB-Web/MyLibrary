import axios from 'axios';

import {
  BACKEND_URL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from '../constants.js';

export const getBooks = (page) => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type':'application/json'
    }
  }

  try {
    dispatch({ type: GET_BOOKS_REQUEST})

    const limit = 3;
    const { data } = await axios.get(`${BACKEND_URL}/book/getbooks/?page=${page}&limit=${limit}`, config);

    dispatch({ type: GET_BOOKS_SUCCESS, payload: data.results})

  } catch (err) {
    dispatch({ type: GET_BOOKS_FAILURE, payload: err.response })
  }

}