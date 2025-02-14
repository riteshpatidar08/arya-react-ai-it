import { createSlice } from '@reduxjs/toolkit';

//Initial State

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: function (state) {
      state.count += 1;
    },
    decrement: function (state) {
      state.count -= 1;
    },
    reset: function (state) {
      state.count = 0;
    },
  },
});
console.log(counterSlice);

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
// createSlice => connect this slice to store => connect store with app
