import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'books/ADDBOOK';
const REMOVEBOOK = 'books/REMOVEBOOKS';

const initialState = { books: [] };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVEBOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    // do reducer stuff
    default: return state;
  }
}

// Action Creator
export function addbook(title, author) {
  const id = uuidv4();
  return {
    type: ADDBOOK,
    payload: { id, title, author },
  };
}

export function removebook(id) {
  return {
    type: REMOVEBOOK,
    payload: id,
  };
}
