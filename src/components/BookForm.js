import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { addBook } from '../actions/book';

class BookFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      author: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'title') {
      const title = e.target.value;
      this.setState({
        title,
      });
      return;
    }

    if (e.target.id === 'author') {
      const author = e.target.value;
      this.setState({
        author,
      });
      return;
    }

    const category = e.target.value;
    this.setState({
      category,
    });
  }


  handleSubmit(e, id) {
    e.preventDefault();
    const { title, category, author } = this.state;

    const book = {
      title,
      category,
      author,
      id,
      currentChapter: 0,
      progress: 0,
    };

    const { addNewBook } = this.props;
    addNewBook(book);

    this.setState({
      title: '',
      category: '',
      author: '',
    });

    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const categoryInput = document.querySelector('#category');
    titleInput.value = '';
    authorInput.value = '';
    categoryInput.value = '';
  }


  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { id } = this.props;
    return (
      <>
        <div className="book-form-holder">
          <h3>ADD A NEW BOOK</h3>
          <form className="card row">
            <input id="title" type="text" onChange={this.handleChange} placeholder="Book title" />
            <input id="author" type="text" onChange={this.handleChange} placeholder="Author" />
            <select id="category" type="select" onChange={this.handleChange} name="Genre">
              {categories.map((category) => <option key={Math.random()}>{category}</option>)}
            </select>
            <button type="submit" onClick={(event) => this.handleSubmit(event, id)}>Add Book</button>
          </form>
          <p className="signature">
Written in React & Redux By Oluwadamilare Olusakin
            <i className="heart" />
          </p>
        </div>
      </>
    );
  }
}

BookFormComponent.defaultProps = {
  addNewBook: () => {},
  id: 1,
};

BookFormComponent.propTypes = {
  addNewBook: PropType.func,
  id: PropType.number,
};

const mapStateToProps = (state) => {
  const { books } = state.bookReducer;
  const lastBook = books[books.length - 1];
  const id = lastBook ? lastBook.id + 1 : 1;
  return {
    id,
    categories: state.filterReducer.categories,
  };
};


const mapDispatchToProps = (dispatch) => ({
  addNewBook: (book) => dispatch(addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookFormComponent);
