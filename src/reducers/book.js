const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      title: 'The first placeholder book',
      category: 'Action',
      id: 1,
    },

    {
      title: 'The second placeholder book',
      category: 'Action',
      id: 2,
    },

    {
      title: 'The third placeholder book',
      category: 'Action',
      id: 3,
    },

    {
      title: 'The fourth placeholder book',
      category: 'Action',
      id: 4,
    },

  ]
};


const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return Object.assign({}, state, {books: [...state.books, action.book]});
    case REMOVE_BOOK:
      const targetBook = action.book;
      const books = state.books;
      const newList = books.filter(book => book !== targetBook)
      return Object.assign({}, state, {books: newList});
    default:
      return state;
  }
};

export default bookReducer;
