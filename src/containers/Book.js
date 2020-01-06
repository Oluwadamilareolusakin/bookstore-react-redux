import { connect } from 'react-redux';
import { openBookModal } from '../actions/book';
import BookComponent from '../components/Book';

const mapStateToProps = state => {
  return {
    bookToUpdate: state.bookReducer.bookToUpdate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (book) => dispatch(openBookModal(book)),
  }
}

const Book = connect(mapStateToProps, mapDispatchToProps)(BookComponent);

export default Book;