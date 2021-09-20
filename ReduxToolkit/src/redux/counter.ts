import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

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
  [increment.type]: (state, action: PayloadAction<any>) => state + 1,
  [decrement.type]: (state, action: PayloadAction<any>) => state - 1,
});

 */
// createSlice 사용!  action + reducer

export interface CounterState {
  isLoading: boolean;
  value: number;
  error: boolean;
}

const initialState: CounterState = {
  isLoading: false,
  value: 0,
  error: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const counterSelector = (state: any) => state.counter; // state
export const { increment, decrement } = counterSlice.actions; // 액션 생성 함수
export default counterSlice.reducer;
