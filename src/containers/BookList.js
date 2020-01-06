import { connect } from 'react-redux';
import BookListComponent from '../components/BookList';
import { removeBook } from '../actions/book';


const mapStateToProps = (state) => ({
  books: state.bookReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => dispatch(removeBook(book)),
});

const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListComponent);

module.exports = { BookList };
