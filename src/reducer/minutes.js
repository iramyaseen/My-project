const intialstate = 0;

const minutes = (state = intialstate, action) => {
  switch (action.type) {
    case "minutes":
      return state;
    default:
      return state;
  }
};
export default minutes;
