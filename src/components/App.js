import React from 'react';
import BookList from '../containers/BookList';
import BookForm from './BookForm';

const App = (props) => {
  return(
  <div>
    <BookList />
    <BookForm />
  </div>
  )
};

export default App;
