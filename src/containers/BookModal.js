import React from 'react';
import { connect } from 'react-redux';
import BookModalComponent from '../components/BookModal';
import { updateBook } from '../actions/book';

const mapStateToProps = state => {
  return {
    book: state.bookReducer.bookToUpdate,
    categories: state.filterReducer.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBookDetails: (oldCopy, newCopy) => dispatch(updateBook(oldCopy, newCopy)), 
  }
}

const BookModal = connect(mapStateToProps, mapDispatchToProps)(BookModalComponent);

export default BookModal;