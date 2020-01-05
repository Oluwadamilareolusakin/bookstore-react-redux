import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/book';

class BookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
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
    const category = e.target.value;
    this.setState({
      category,
    })
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    const { title, category } = this.state;

    const book = {
      title,
      category,
      id,
    }

    this.props.addNewBook(book);

    this.setState({
      title: '',
      category: '',
    })
  }

  render() {
    const { categories } = this.props;
    return (
      <form>
        <input id="title" onChange={this.handleChange}/>
        <select id="category" onChange={this.handleChange}>
          {categories.map((category, index) => <option key={index}>{category}</option>)}
        </select>
        <button type="submit" onClick={(event) => this.handleSubmit(event, this.props.id)} >Add Book</button>
      </form>
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
