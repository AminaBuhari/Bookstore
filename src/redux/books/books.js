import { v4 as uuidv4 } from 'uuid';
import { getData, deleteBooks, postBooks } from '../api';

const ADDBOOK = 'books/ADDBOOK';
const REMOVEBOOK = 'books/REMOVEBOOKS';
const RETURNBOOKS = 'books/RETURNBOOKS';

const initialState = [];

// Reducer
function reducerBook(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state, action.book,
      ];
    case REMOVEBOOK:
      return [...state.filter((book) => book.id !== action.id)];

    case RETURNBOOKS:
      return [...action.books];
    // do reducer stuff
    default: return state;
  }
}

// Action Creator
export function addbook(id, title, author) {
  const book = {
    id,
    title,
    author,
  };

  return {
    type: ADDBOOK,
    book,
  };
}

export const pushBookManually = (title, author) => async (dispatch) => {
  const id = uuidv4();
  await postBooks(id, title, author);
  dispatch(addbook(id, title, author));
};

export const addedBooks = (books) => {
  const formatBooks = Object.entries(books).map(([key, value]) => ({ ...value[0], id: key }));
  return {
    type: RETURNBOOKS,
    books: formatBooks,
  };
};

export const getBooks = () => async (dispatch) => {
  const response = await getData();
  dispatch(addedBooks(response));
};

export const deletedBooksComplete = (id) => ({
  type: REMOVEBOOK,
  id,
});

export const deletedBooks = (id) => async (dispatch) => {
  await deleteBooks(id);
  dispatch(deletedBooksComplete(id));
};

export default reducerBook;
