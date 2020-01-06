import React from 'react';
import { Component, Fragment } from 'react';
import Book from '../containers/Book';
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
        <div className="books">
          {books.map((book, index) => <Book book={book} key={index} handleRemoveBook={(event) => this.handleRemoveBook(event,book)} handleScroll={this.props.handleScroll}/>)}
        </div>
      </Fragment>
    );
  }
};

export default BookListComponent;
