export const increment = () => ({
  type: "INCREMENT"
});

export const decrement = () => ({
  type: "DECREMENT"
});
export const doReset = () => ({
   type: "RESET"
});

export const reset = () => (dispatch, getState) => {
  console.log('aaaaa')
  dispatch(doReset());
};