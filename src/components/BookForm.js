import React from 'react';

const BookForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input />
      <select>
        {categories.map((category,index => <option key={index}>{category}</option>))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;