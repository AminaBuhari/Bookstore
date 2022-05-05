import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducerBook from './books/books';
import reducerCategory from './categories/categories';

const rootReducer = combineReducers({
  categories: reducerCategory,
  books: reducerBook,
});

const store = configureStore({ reducer: rootReducer });

export default store;
