import * as types from './types';

const initState = {
  loading: true,
  success: false,
  categories: [],
  genres: [],
  authors: [],
  books: [],
};

const catalogReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case types.CHANGE_FIELD_IN_STORE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};

export default catalogReducer;