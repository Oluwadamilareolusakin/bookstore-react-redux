import React from 'react';
import ReactRedux from 'react-redux';
import Book from './Book';
import { addBook, removeBook } from '../actions/book';

const BookList = (props) => {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book Id</th>
      </tr>
      <tr>
        <th>Title</th>
      </tr>
      <tr>
        <th>Category</th>
      </tr>
      {books.map((book, index) => <Book book={book} key={index} />)}
      <tr />
    </table>
  );
};

const mapStateToProps = state => ({
  books: state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewBook: book => dispatch(addBook(book)),
  deleteBook: index => dispatch(removeBook(index)),
});

const { connect } = ReactRedux;

connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;
