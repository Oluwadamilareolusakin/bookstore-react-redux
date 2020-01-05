import React from 'react';

const CategoryFilterComponent = (props) => {
  let { categories, filterBooks } = props;
  categories = ["All", ...categories];

  const changeFilter = (e) => {
    filterBooks(e.target.value);
  }

  return (
    <div className="category-filter row">
      <select onChange={(event) => changeFilter(event)}>
        {categories.map(category => <option>{category}</option>)}
      </select>
    </div>
  )
}

export default CategoryFilterComponent;