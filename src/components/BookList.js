import React from 'react';
import ReactRedux from 'react-redux';
import Book from './Book';
import addBook from '../actions/book';

class BookList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {books} = this.props;
    return(
      <table>
        <tr>
          <th>Book Id</th>
        </tr>
        <tr>
          <th>Title</th>
        </tr>
        <tr>
          <th>Category</th>
        </tr>
        {books.map(book => 
          <Book book={book}/>
        )}
        <tr></tr>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state,
  }
};

const mapDispatchToProps = (dispatch) =>{
  return{
    addNewBook: (book) => dispatch(addBook(book)),
    deleteBook: (index) => dispatch(removeBook(index))
  }
};

const connect = ReactRedux.connect;

connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;