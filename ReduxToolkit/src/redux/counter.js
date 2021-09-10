import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/* before

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
} 


export function counterReducer(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
} 

*/

/* after

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");

export const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + 1,
  [decrement]: (state, action) => state - 1,
});

*/

// createSlice 사용!
// action + reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    value: 0,
    error: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const counterSelector = (state) => state.counter; // state
export const { increment, decrement } = counterSlice.actions; // 액션 생성 함수
export default counterSlice.reducer;
