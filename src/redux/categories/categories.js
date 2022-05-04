const CATEGORIES = 'books/CATEGORIES';

const initialState = [];
export function categories() {
  return {
    type: CATEGORIES,
  };
}

export default function reducerCategory(state = initialState, action = {}) {
  if (action.type === 'CATEGORIES') {
    return 'Under Construction';
  }
  return state;
}
