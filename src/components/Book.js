import React from 'react';

const Book = (props) => {
  const { book, key, handleRemoveBook } = props;
  
  return (
    <tr key={key}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={(event) => handleRemoveBook(event,book)}>Remove Book</button></td>
    </tr>
  );
};

export default Book;
