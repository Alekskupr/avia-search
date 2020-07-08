const inintialState = {
  selectSort: {
    radioValue: '',
    checkbox: false,
    priceMin: 0,
    priceMax: 100000,
  },
};

export default function (state = inintialState, action) {
  switch (action.type) {
    case 'SELECT_OPTIONS': {
      return {
        ...state,
        selectSort: action.payload,
      };
    }
    default:
      return state;
  }
}