import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/book';

class BookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
      author: '',
    }
  }

  handleChange = (e) => {
    if (e.target.id === 'title'){
      const title = e.target.value;
      this.setState({
        title,
      });
      return;
    }

    if (e.target.id === 'author'){
      const author = e.target.value;
      this.setState({
        author,
      });
      return;
    }
    
    const category = e.target.value;
    this.setState({
      category,
    })
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    const { title, category, author } = this.state;

    const book = {
      title,
      category,
      author,
      id,
      currentChapter: 0,
      progress: 0,
    }

    this.props.addNewBook(book);

    this.setState({
      title: '',
      category: '',
      author: '',
    })

    this.clearInput();
  }

  clearInput = () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const category = document.querySelector('#category');
    title.value = '';
    author.value = '';
    category.value = '';
  }

  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        <div className="book-form-holder">
          <h3>ADD A NEW BOOK</h3>
          <form className="card row">
            <input id="title" type="text" onChange={this.handleChange} placeholder="Book title"/>
            <input id="author" type="text" onChange={this.handleChange} placeholder="Author"/>
            <select id="category" type="select" onChange={this.handleChange} name="Genre">
              {categories.map((category, index) => <option key={index}>{category}</option>)}
            </select>
            <button type="submit" onClick={(event) => this.handleSubmit(event, this.props.id)} >Add Book</button>
          </form>
          <p className="signature">Written in React & Redux By Oluwadamilare Olusakin <i className="heart"></i></p>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  const books = state.bookReducer.books;
  const lastBook = books[books.length - 1];
  const id = lastBook ? lastBook.id + 1 : 1;
  return {
    id,
    categories: state.filterReducer.categories,
  }
}



const mapDispatchToProps = (dispatch) => ({
  addNewBook: book => dispatch(addBook(book)),
});

BookForm = connect(mapStateToProps, mapDispatchToProps)(BookForm);


export default BookForm;
