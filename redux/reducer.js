const inintialState = {
  selectedLocation: '',
};

export default function (state = inintialState, action) {
  switch (action.type) {
    case 'SELECT_LOCATION': {
      return {
        ...state,
        selectedLocation: action.payload,
      }
    }
    default: return state;
  }
}