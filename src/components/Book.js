import React from 'react';

const Book = (props) => {
  const { book, key } = props;
  return (
    <tr key={key}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

export default Book;
