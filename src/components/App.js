import React from 'react';
import BookList from '../containers/BookList';
import BookForm from './BookForm';
import Header from './Header';

const App = (props) => {
  return(
  <div>
    <Header/>
    <BookList />
    <BookForm />
  </div>
  )
};

export default App;
