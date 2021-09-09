import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

//
// action

/* before

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
} 
*/

// after
export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");

//
// reducer

/* before

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

export const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + 1,
  [decrement]: (state, action) => state - 1,
});

// createSlice 사용!
// action + reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// slice
export const { increment, decrement } = counterSlice.actions; // 액션 생성 함수
export default counterSlice.reducer;

// createAsyncThunk

export const axiosCounter = createAsyncThunk("counter/axiosCounter");
