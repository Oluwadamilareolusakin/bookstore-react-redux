export const addBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const updateBook = (oldCopy, newCopy) => ({
  type: 'UPDATE_BOOK',
  oldCopy,
  newCopy,
});

export const openBookModal = book => ({
  type: 'OPEN_UPDATE_MODAL',
  book,
});
