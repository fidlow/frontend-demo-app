const defaultState = { count: 0 };

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return defaultState;
    default:
      return state;
  }
};
