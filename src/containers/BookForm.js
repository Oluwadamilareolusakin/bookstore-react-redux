import { connect } from 'react-redux';
import { addBook } from '../actions/book';
import BookFormComponent from '../components/BookForm';

const mapStateToProps = (state) => {
  const { books } = state.bookReducer;
  const lastBook = books[books.length - 1];
  const id = lastBook ? lastBook.id + 1 : 1;
  return {
    id,
    categories: state.filterReducer.categories,
  };
};


const mapDispatchToProps = dispatch => ({
  addNewBook: book => dispatch(addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookFormComponent);
