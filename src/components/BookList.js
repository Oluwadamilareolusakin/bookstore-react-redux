import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from '../containers/CategoryFilter';
import Book from '../containers/Book';

const BookListComponent = (props) => {
  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    const { deleteBook } = props;
    deleteBook(book);
  };

  let { books } = props;
  const { filter } = props;
  books = filter === 'All' ? books : books.filter(book => book.category === filter);
  return (
    <>
      <CategoryFilter />
      <div className="books">
        {books.map(book => (
          <Book
            book={book}
            key={book.id}
            handleRemoveBook={event => handleRemoveBook(event, book)}
            handleScroll={props.handleScroll}
          />
        ))}
      </div>
    </>
  );
};

BookListComponent.defaultProps = {
  deleteBook: () => {},
  books: [],
  filter: () => {},
  handleScroll: () => {},
};

BookListComponent.propTypes = {
  deleteBook: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  filter: PropTypes.func,
  handleScroll: PropTypes.func,
};


export default BookListComponent;
