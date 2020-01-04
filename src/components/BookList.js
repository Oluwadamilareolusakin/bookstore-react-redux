import React from 'react';
import Book from './Book';

class BookListComponent extends React.Component {  
  handleRemoveBook = (event,book) => {
    event.preventDefault();
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  render() {
    const { books }  = this.props;
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
        {books.map((book, index) => <Book book={book} key={index} handleRemoveBook={(event) => this.handleRemoveBook(event,book)}/>)}
        <tr />
      </table>
    );
  }
};

export default BookListComponent;
