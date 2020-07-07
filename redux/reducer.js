const inintialState = {
  selectSort: '',
};

export default function (state = inintialState, action) {
  switch (action.type) {
    case 'SELECT_SORT': {
      return {
        ...state,
        selectSort: action.payload,
      };
    }
    default:
      return state;
  }
}