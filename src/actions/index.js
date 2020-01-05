const CHANGE_FILTER = "CHANGE_FILTER";

const changeFilter = (option) => {
  return {
    type: CHANGE_FILTER,
    option,
  }
}

export default changeFilter;