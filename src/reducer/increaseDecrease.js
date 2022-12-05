const intialstate = 0;

export const increaseDecrease = (state = intialstate, action) => {
  switch (action.type) {
    case "increase":
      return state + 30;
    case "decrease":
      return state - 30;
    default:
      return state;
  }
};

export default increaseDecrease;
