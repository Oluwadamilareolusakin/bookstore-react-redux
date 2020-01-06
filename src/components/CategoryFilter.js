import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilterComponent = (props) => {
  let { categories } = props;
  const { filterBooks } = props;
  categories = ['All', ...categories];

  const changeFilter = (e) => {
    filterBooks(e.target.value);
  };

  return (
    <select onChange={(event) => changeFilter(event)}>
      {categories.map((category) => <option key={Math.random()}>{category}</option>)}
    </select>
  );
};

CategoryFilterComponent.defaultProps = {
  filterBooks: () => {},
  categories: [],
};

CategoryFilterComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
  filterBooks: PropTypes.func,
};

export default CategoryFilterComponent;
