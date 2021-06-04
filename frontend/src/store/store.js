import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userDetailsReducer } from './reducers/userReducers';
import { getBooksReducer } from './reducers/bookReducers';

import { composeWithDevTools } from 'redux-devtools-extension';

import { decryptLocalStorage } from '../utils/encryption.js';

const reducer = combineReducers({
  userDetails: userDetailsReducer,
  books: getBooksReducer
});

const userInfoFromStorage = decryptLocalStorage('userKey') 
  ? decryptLocalStorage('userKey') 
  : {userAuth: false};

const initialState = {
  userDetails: userInfoFromStorage,
  books: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;


