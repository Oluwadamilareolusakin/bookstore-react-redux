import React from 'react';
import { Component, Fragment } from 'react';
import Book from './Book';
import CategoryFilter from '../containers/CategoryFilter';

class BookListComponent extends Component {  
  handleRemoveBook = (event,book) => {
    event.preventDefault();
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  render() {
    let { books, filter }  = this.props;
    books = filter === "All" ? books : books.filter(book => book.category === filter);
    return (
      <Fragment>
        <CategoryFilter/> 
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
            {books.map((book, index) => <Book book={book} key={index} handleRemoveBook={(event) => this.handleRemoveBook(event,book)}/>)}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default BookListComponent;
