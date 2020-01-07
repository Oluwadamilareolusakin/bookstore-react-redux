import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookModalComponent extends Component {
  constructor(props) {
    super(props);
    const { book } = this.props;
    const {
      title, category, author, pagesRead, pages, currentChapter,
    } = book;
    this.state = {
      title,
      category,
      author,
      pages,
      pagesRead,
      currentChapter,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    if (e.target.id === 'chapter') {
      const currentChapter = e.target.value;
      this.setState({
        currentChapter,
      });
      return;
    }

    if (e.target.id === 'pages') {
      const pages = e.target.value;
      this.setState({
        pages,
      });
      return;
    }

    if (e.target.id === 'read') {
      const pagesRead = e.target.value;
      this.setState({
        pagesRead,
      });
      return;
    }

    const category = e.target.value;
    this.setState({
      category,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title, category, author, pagesRead, pages, currentChapter,
    } = this.state;
    const { updateBookDetails, handleModal } = this.props;
    const progress = pages && pagesRead ? Math.round((pagesRead / pages) * 100) : 0;

    const updatedBook = {
      title,
      category,
      author,
      currentChapter,
      pagesRead,
      pages,
      progress,
    };

    const { book } = this.props;
    updateBookDetails(book, updatedBook);
    handleModal();
  }

  render() {
    const { categories } = this.props;
    const {
      title, category, author, pagesRead, pages, currentChapter,
    } = this.state;
    return (
      <form className="column">
        <input id="title" type="text" onChange={this.handleChange} placeholder="Book title" value={title} />
        <input id="author" type="text" onChange={this.handleChange} placeholder="Author" value={author} />
        <input id="pages" type="number" onChange={this.handleChange} placeholder="Total no. of pages" value={pages} />
        <input id="read" type="number" onChange={this.handleChange} placeholder="No. of pages read" value={pagesRead} />
        <input id="chapter" type="number" onChange={this.handleChange} placeholder="Current Chapter" value={currentChapter} />
        <select id="category" type="select" onChange={this.handleChange} name="Genre" value={category}>
          {categories.map(category => <option key={Math.random()}>{category}</option>)}
        </select>
        <button type="submit" onClick={event => this.handleSubmit(event)}>Update Book</button>
      </form>
    );
  }
}

BookModalComponent.defaultProps = {
  title: '',
  category: '',
  author: '',
  pagesRead: 1,
  pages: 1,
  currentChapter: 1,
  categories: [],
  book: {},
  updateBookDetails: () => {},
  handleModal: () => {},
};


BookModalComponent.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  pagesRead: PropTypes.number,
  pages: PropTypes.number,
  currentChapter: PropTypes.number,
  updateBookDetails: PropTypes.func,
  handleModal: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.oneOfType(String)),
  book: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
};

export default BookModalComponent;
