import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilterComponent = (props) => {
  const { filterBooks, index } = props;
  let { categories } = props;
  categories = ['All', ...categories];

  const changeFilter = (e) => {
    filterBooks(e.target.value);
  };

  return (
    <div className="category-filter row">
      <select onChange={event => changeFilter(event)}>
        {categories.map(category => <option key={index + 1}>{category}</option>)}
      </select>
    </div>
  );
};

CategoryFilterComponent.defaultProps = {
  filterBooks: () => {},
  categories: [],
  index: 1,
};

CategoryFilterComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
  filterBooks: PropTypes.func,
  index: PropTypes.number,
};

export default CategoryFilterComponent;
