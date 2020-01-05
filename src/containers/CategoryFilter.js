import { connect } from 'react-redux';
import CategoryFilterComponent from '../components/CategoryFilter';
import changeFilter from '../actions/index';

const mapStateToProps = state => {
  const {categories, currentCategory} = state.filterReducer;
  return {
    categories,
    currentCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterBooks: option => dispatch(changeFilter(option)), 
  }
}

const CategoryFilter = connect(mapStateToProps, mapDispatchToProps)(CategoryFilterComponent);

export default CategoryFilter;

