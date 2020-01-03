const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      const { targetBook } = action.book;
      const newList = state.filter((book) => book !== targetBook);
      return newList;
    default:
      return state;
  }
};

export default bookReducer;
