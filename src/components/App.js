import React from 'react';
import { connect } from 'react-redux';
import * as BookList from '../containers/BookList';
import * as BookForm from './BookForm';
import Header from './Header';

const AppComponent = (props) => {
  
  import BookModal from '../containers/BookModal';
  return(
  <div>
    <div className="book-modal">
      <i className="close" onClick={props.handleClick}></i>
      {props.bookToUpdate && <BookModal handleModal={props.handleClick}/>}
    </div>
    <Header/>
    <BookList handleScroll={props.handleClick}/>
    <BookForm />
  </div>
);

const mapStateToProps = state => {
  const { bookToUpdate } = state.bookReducer;
  return {
    bookToUpdate,
  }
}

const App = connect(mapStateToProps)(AppComponent);

export default App;
