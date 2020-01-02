const ADD = 'ADD';

const bookReducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.book];
    default:
      return state;
  }
}

export default bookReducer;