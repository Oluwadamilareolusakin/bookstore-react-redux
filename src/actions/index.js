const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = (option) => ({
  type: CHANGE_FILTER,
  option,
});

export default changeFilter;
