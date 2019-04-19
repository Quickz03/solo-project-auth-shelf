const itemsCount = (state = [], action) => {
  switch (action.type) {
    case `SET_COUNT`:
      return action.payload;
    default:
      return state;
  }
}

// shelfItems will be on the redux state at:
// state.itemsCount
export default itemsCount;