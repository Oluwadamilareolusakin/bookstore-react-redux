const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      title: 'The first placeholder book',
      category: 'Action',
      id: 1,
      currentChapter: 0,
      progress: 0,
      author: "Some Random Dude"
    },

    {
      title: 'The second placeholder book',
      category: 'Action',
      id: 2,
      currentChapter: 0,
      progress: 0,
      author: "Some Random Dude"
    },

    {
      title: 'The third placeholder book',
      category: 'Action',
      id: 3,
      currentChapter: 0,
      progress: 0,
      author: "Some Random Dude"
    },

    {
      title: 'The fourth placeholder book',
      category: 'Action',
      id: 4,
      currentChapter: 0,
      progress: 0,
      author: "Some Random Dude"
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
