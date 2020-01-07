const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';
const OPEN_UPDATE_MODAL = 'OPEN_UPDATE_MODAL';

const initialState = {
  books: [
    {
      title: 'The first placeholder book',
      category: 'Action',
      id: 1,
      currentChapter: 0,
      progress: 0,
      author: 'Some Random Dude',
    },

    {
      title: 'The second placeholder book',
      category: 'Action',
      id: 2,
      currentChapter: 0,
      progress: 0,
      author: 'Some Random Dude',
    },

    {
      title: 'The third placeholder book',
      category: 'Action',
      id: 3,
      currentChapter: 0,
      progress: 0,
      author: 'Some Random Dude',
    },

    {
      title: 'The fourth placeholder book',
      category: 'Action',
      id: 4,
      currentChapter: 0,
      progress: 0,
      author: 'Some Random Dude',
    },
  ],
  bookToUpdate: null,
};


const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case UPDATE_BOOK: {
      const { oldCopy, newCopy } = action;
      const originalList = state.books;
      const updatedList = originalList.map((book) => {
        if (book === oldCopy) {
          return newCopy;
        }
        return book;
      });
      return { ...state, books: updatedList, bookToUpdate: null };
    }

    case OPEN_UPDATE_MODAL: {
      return { ...state, bookToUpdate: action.book };
    }

    case REMOVE_BOOK: {
      const targetBook = action.book;
      const { books } = state;
      const newList = books.filter((book) => book !== targetBook);
      return { ...state, books: newList };
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
