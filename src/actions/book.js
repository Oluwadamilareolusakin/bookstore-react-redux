const addBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (index) => ({
  type: 'REMOVE_BOOK',
  index,
});

export default { addBook, removeBook };
