import React, { Fragment } from 'react';
import Book from '../containers/Book';
import PropTypes from 'prop-types';
import CategoryFilter from '../containers/CategoryFilter';

const BookListComponent = (props) => {

  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    const { deleteBook } = props;
    deleteBook(book);
  };

    let { books, filter }  = props;
    books = filter === "All" ? books : books.filter(book => book.category === filter);
    return (
      <Fragment>
        <CategoryFilter/> 
        <div className="books">
          {books.map((book, index) => <Book book={book} key={index} handleRemoveBook={(event) => handleRemoveBook(event,book)} handleScroll={props.handleScroll}/>)}
        </div>
      </Fragment>
    );
  }
  
  BookListComponent.defaultProps = {
    deleteBook: () => {},
    books: [],
  };
  
  BookListComponent.propTypes = {
    deleteBook: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  };
  

export default BookListComponent;
