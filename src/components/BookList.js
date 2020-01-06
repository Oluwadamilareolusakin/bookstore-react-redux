import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookListComponent = (props) => {
  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    const { deleteBook } = props;
    deleteBook(book);
  };

  const { books } = props;
  return (
    <table>
      <thead className="row">
        <tr>
          <th>Book Id</th>
        </tr>
        <tr>
          <th>Title</th>
        </tr>
        <tr>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            book={book}
            key={Math.random()}
            handleRemoveBook={(event) => handleRemoveBook(event, book)}
          />
        ))}
      </tbody>
    </table>
  );
};

BookListComponent.defaultProps = {
  deleteBook() {},
  books: [],
};

BookListComponent.propTypes = {
  deleteBook: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
};

export default BookListComponent;
