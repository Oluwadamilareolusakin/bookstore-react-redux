const addBook = (book) => {
  return{
    type: "CREATE_BOOK",
    book
  }
}

const removeBook = (index) => {
  return {
    type: "REMOVE_BOOK",
    index
  }
}

export default {addBook, removeBook};