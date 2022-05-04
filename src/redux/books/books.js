import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'books/ADDBOOK';
const REMOVEBOOK = 'books/REMOVEBOOKS';

const initialState = [
  {
    title: 'The hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    title: 'The Dune',
    author: 'Frank Herbert',
    id: 2,
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,

  },
];

// Reducer
function reducerBook(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state, action.book,
      ];
    case REMOVEBOOK:
      return [...state.filter((book) => book.id !== action.id)];
    // do reducer stuff
    default: return state;
  }
}

// Action Creator
export function addbook(title, author) {
  const id = uuidv4();
  const book = {
    title,
    author,
    id,
  };

  return {
    type: ADDBOOK,
    book,
  };
}

export function removebook(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}

export default reducerBook;
