import React from 'react';

const Book = (props) => {
  const { book, key, handleRemoveBook } = props;
  
  return (
    <div key={key} className="book card row">
      <div className="book-left">
        <div className="book-details">
          <h6 className="book-category">{book.category}</h6>
          <div className="book-title">{book.title}</div>
          <div className="book-author">By {book.author}</div>
        </div>
        <div className="book-controls">
          <a onClick={(event) => handleRemoveBook(event,book)}>Remove</a>
        </div>
      </div>
      <div className="book-right row">
        <div className="book-completion">
          <h5 className="heading">Progress</h5>
          <div>
            <h1 className="progress">{book.progress}%</h1>
          </div>
        </div>
        <div className="book-details">
          <h5 className="heading">Current Chapter</h5>
          <p className="current-chapter">Chapter {book.currentChapter}</p>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
