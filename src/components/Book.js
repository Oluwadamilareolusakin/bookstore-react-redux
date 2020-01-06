import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, key, handleRemoveBook } = props;

  return (
    <tr key={key}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={(event) => handleRemoveBook(event, book)} type="button">Remove Book</button></td>
    </tr>
  );
};

Book.defaultProps = {
  book: {},
  handleRemoveBook: () => {},
  key: 1,
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  handleRemoveBook: PropTypes.func,
  key: PropTypes.number,
};

export default Book;
