import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import reducer from './books/books';
import reducerCategory from './categories/categories';

const rootReducer = combineReducers({
  reducerCategory,
  reducer,
});

const middlewares = [logger];

const store = configureStore(rootReducer, applyMiddleware(...middlewares));

export default store;
