import { connect } from 'react-redux';
import BookModalComponent from '../components/BookModal';
import { updateBook } from '../actions/book';

const mapStateToProps = (state) => ({
  book: state.bookReducer.bookToUpdate,
  categories: state.filterReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  updateBookDetails: (oldCopy, newCopy) => dispatch(updateBook(oldCopy, newCopy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookModalComponent);
