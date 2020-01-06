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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'title') {
      const title = e.target.value;
      this.setState({
        title,
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
    const { title, category } = this.state;

    const book = {
      title,
      category,
      id,
    };

    const { addNewBook } = this.props;
    addNewBook(book);

    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { id } = this.props;
    return (
      <form>
        <input id="title" onChange={this.handleChange} />
        <select id="category" onChange={this.handleChange}>
          {categories.map((category) => <option key={Math.random()}>{category}</option>)}
        </select>
        <button type="submit" onClick={(event) => this.handleSubmit(event, id)}>Add Book</button>
      </form>
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
  const books = state.bookReducer.books;
  const lastBook = books[books.length - 1];
  const id = lastBook ? lastBook.id + 1 : 1;
  return {
    id,
<<<<<<< HEAD
    categories: state.filterReducer.categories,
  }
}

=======
  };
};
>>>>>>> components


const mapDispatchToProps = (dispatch) => ({
  addNewBook: (book) => dispatch(addBook(book)),
});

const BookForm = connect(mapStateToProps, mapDispatchToProps)(BookFormComponent);

module.exports = BookForm;
