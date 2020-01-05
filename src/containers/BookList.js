import { connect } from 'react-redux';
import BookListComponent from '../components/BookList';
import { removeBook } from '../actions/book';


const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    filter: state.filterReducer.currentCategory,
  }
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => dispatch(removeBook(book)),
});

const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListComponent);

export default BookList;
