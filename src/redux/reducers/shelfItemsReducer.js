const shelfItems = (state = [], action) => {
  switch (action.type) {
    case `SET_ITEMS`:
      return action.payload;
    default:
      return state;
  }
}

// shelfItems will be on the redux state at:
// state.shelfItems
export default shelfItems;
