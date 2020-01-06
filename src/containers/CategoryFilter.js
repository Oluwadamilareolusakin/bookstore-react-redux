import { connect } from 'react-redux';
import CategoryFilterComponent from '../components/CategoryFilter';
import ChangeFilter from '../actions/index';

const mapStateToProps = state => {
  const { categories, currentCategory } = state.filterReducer;
  return {
    categories,
    currentCategory,
  };
};

const mapDispatchToProps = dispatch => ({
  filterBooks: option => dispatch(ChangeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterComponent);
