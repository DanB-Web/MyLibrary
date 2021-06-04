import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  CLEAR_BOOKS
} from '../constants.js';

export const getBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true }
    case GET_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload.books, next: action.payload.next, totalBooks: action.payload.totalBooks }
    case GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case CLEAR_BOOKS:
      return {}  
    default:
      return state;
  }
}