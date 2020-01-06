import React from "react";
import { Component, Fragment } from "react";
import { updateBook } from '../actions/book';

class BookModalComponent extends Component {
  constructor(props){
    super(props);
    const { title, category, author, pagesRead, pages, currentChapter } = this.props.book;
    this.state = {
      title,
      category,
      author,
      pages,
      pagesRead,
      currentChapter,
    }
  };

  handleChange = (e) => {
    if (e.target.id === 'title'){
      const title = e.target.value;
      this.setState({
        title,
      });
      return;
    };

    if (e.target.id === 'author'){
      const author = e.target.value;
      this.setState({
        author,
      });
      return;
    }

    if (e.target.id === 'chapter'){
      const currentChapter = e.target.value;
      this.setState({
        currentChapter,
      });
      return;
    };

    if (e.target.id === 'pages'){
      const pages = e.target.value;
      this.setState({
        pages,
      });
      return;
    };

    if (e.target.id === 'read'){
      const pagesRead = e.target.value;
      this.setState({
        pagesRead,
      });
      return;
    };
    
    const category = e.target.value;
    this.setState({
      category,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, category, author, pagesRead, pages, currentChapter } = this.state;
    let progress = pages && pagesRead ? Math.round((pagesRead/pages) * 100) : 0;

    const book = {
      title,
      category,
      author,
      currentChapter,
      pagesRead,
      pages,
      progress,
    }

    this.props.updateBookDetails(this.props.book, book);
    this.props.handleModal();
  };

  render(){
    const { categories, book } = this.props;
    const { title, category, author, pagesRead, pages, currentChapter } = this.state;
    return (
      <form className="column">
        <input id="title" type="text" onChange={this.handleChange} placeholder="Book title" value={title}/>
        <input id="author" type="text" onChange={this.handleChange} placeholder="Author" value={author}/>
        <input id="pages" type="number" onChange={this.handleChange} placeholder="Total no. of pages" value={pages}/>
        <input id="read" type="number" onChange={this.handleChange} placeholder="No. of pages read" value={pagesRead}/>
        <input id="chapter" type="number" onChange={this.handleChange} placeholder="Current Chapter" value={currentChapter}/>        
        <select id="category" type="select" onChange={this.handleChange} name="Genre" value={category}>
          {categories.map((category, index) => <option key={index}>{category}</option>)}
        </select>
        <button type="submit" onClick={(event) => this.handleSubmit(event)}>Update Book</button>
      </form>
    )
  }
};

export default BookModalComponent;

