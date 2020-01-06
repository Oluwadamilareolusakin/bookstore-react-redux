import { connect } from 'react-redux';
import BookListComponent from '../components/BookList';
import { removeBook } from '../actions/book';


const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter: state.filterReducer.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookListComponent);
