import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import BookForm from '../containers/BookForm';
import BookModal from '../containers/BookModal';
import BookList from '../containers/BookList';

const AppComponent = (props) => {
  const { handleClick, bookToUpdate } = props;

  return (
    <div>
      <div className="book-modal">
        <button onClick={handleClick} type="button">
          <i className="close" />
        </button>
        {bookToUpdate && <BookModal handleModal={handleClick} />}
      </div>
      <Header />
      <BookList handleScroll={handleClick} />
      <BookForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { bookToUpdate } = state.bookReducer;
  return {
    bookToUpdate,
  };
};

AppComponent.defaultProps = {
  bookToUpdate: {},
  handleClick: () => {},
};

AppComponent.propTypes = {
  bookToUpdate: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  handleClick: PropTypes.func,
};

export default connect(mapStateToProps)(AppComponent);
