const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

const updateBook = (oldCopy, newCopy) => ({
  type: "UPDATE_BOOK",
  oldCopy,
  newCopy,
});

const openBookModal = book => {
  return {
    type: 'OPEN_UPDATE_MODAL',
    book
  }
}

module.exports = { addBook, removeBook, updateBook, openBookModal };
