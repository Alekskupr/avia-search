const selectSortAC = (radio) => {
  return {
    type: 'SELECT_SORT',
    payload: radio,
  };
};

export { selectSortAC };
