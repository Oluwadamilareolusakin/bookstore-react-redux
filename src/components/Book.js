import React from 'react';
import PropTypes from 'prop-types';

const BookComponent = (props) => {
  const {
    book, key, handleRemoveBook, openModal,
  } = props;

  const openBookModal = (book) => {
    openModal(book);
    document.querySelector('.book-modal').classList.toggle('open');
    document.addEventListener('scroll', props.handleScroll);
  };

  return (
    <div key={key} className="book card row">
      <div className="book-left">
        <div className="book-details">
          <h6 className="book-category">{book.category}</h6>
          <div className="book-title">{book.title}</div>
          <div className="book-author">
By
            {book.author}
          </div>
        </div>
        <div className="book-controls">
          <button onClick={(event) => handleRemoveBook(event, book)} type="button">Remove</button>
        </div>
      </div>
      <div className="book-right row">
        <div className="book-completion">
          <h5 className="heading">Progress</h5>
          <div>
            <h1 className="progress">
              {book.progress}
%
            </h1>
            <h3>Completed</h3>
          </div>
        </div>
        <div className="book-details">
          <h5 className="heading">Current Chapter</h5>
          <p className="current-chapter">
Chapter
            {` ${book.currentChapter}`}
          </p>
          <button onClick={() => openBookModal(book)} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookComponent.defaultProps = {
  book: {},
  handleRemoveBook: () => {},
  key: 1,
  openModal: () => {},
  handleScroll: () => {},
};

BookComponent.propTypes = {
  book: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  handleRemoveBook: PropTypes.func,
  key: PropTypes.number,
  openModal: PropTypes.func,
  handleScroll: PropTypes.func,
};

export default BookComponent;
