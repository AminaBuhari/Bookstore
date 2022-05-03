const CATEGORIES = 'books/CATEGORIES';

const initialState = [];
export function categories (){
  return {
    type: CATEGORIES,
  }
    
}

export default function reducerCategory(state = initialState, action = {}) {
    switch (action.type) {
      case CATEGORIES:
        return 'Under Construction'
      // do reducer stuff
      default: return state;
    }
  }

