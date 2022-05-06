import { configureStore} from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerBook from './books/books';

import reducerCategory from './categories/categories';

const rootReducer = combineReducers({
  categories: reducerCategory,
  books: reducerBook,
});

const store = configureStore({ reducer: rootReducer },
  composeWithDevTools(
    applyMiddleware(thunk),
  ));

export default store;
