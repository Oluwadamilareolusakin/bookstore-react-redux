import React from 'react';

const CategoryFilterComponent = (props) => {
  let { categories, filterBooks } = props;
  categories = ["All", ...categories];

  const changeFilter = (e) => {
    filterBooks(e.target.value);
  }

  return (
    <select onChange={(event) => changeFilter(event)}>
      {categories.map(category => <option>{category}</option>)}
    </select>
  )
}

export default CategoryFilterComponent;