import React from 'react';
import ReactRedux from 'react-redux';

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
          <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
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
}

const mapDispatchToProps = () =>{
  return{

  }
}

const connect = ReactRedux.connect;

connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;