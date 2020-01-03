import React from 'react';

const BookForm = (props) => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <form>
      <input/>
      <select>
        {categories.map((category => <option>{category}</option>))}
      </select>
      <button></button>
    </form>
  )
}