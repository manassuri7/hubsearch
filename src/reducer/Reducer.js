const initialState = {
  newList: [],
  showSearch: true
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_NEWS":
      newState.newList = [...action.value.items];
      newState.showSearch = false;
      newState.searchKey = action.value.searchKey;
      break;

    default:
      newState.newList = [];
      newState.showSearch = true;
      newState.searchKey = "";
      break;
  }
  console.log("newState: ", newState);
  return newState;
};

export default reducer;
