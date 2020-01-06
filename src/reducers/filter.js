const CHANGE_FILTER = 'CHANGE_FILTER';

const defaultState = {
  currentCategory: 'All',
  categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, currentCategory: action.option };
    default:
      return state;
  }
};

export default filterReducer;
