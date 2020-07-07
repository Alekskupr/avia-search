const selectLocation = (loc) => {
  return {
    type: 'SELECT_LOCATION',
    payload: loc,
  };
};

export { selectLocation };
