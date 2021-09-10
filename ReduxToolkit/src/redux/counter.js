import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

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

// after
export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
 */

//
// reducer

/* 
before

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


after

export const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + 1,
  [decrement]: (state, action) => state - 1,
});
 */

//
// createAsyncThunk
export const axiosCounter = createAsyncThunk(
  "counter/axiosCounter",
  async (id) => {
    // 비동기 호출 함수를 정의
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// createSlice 사용!
// action + reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    value: 0,
    data: null,
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
  extraReducers: {
    [axiosCounter.pending]: (state) => {
      state.loading = true;
    },
    [axiosCounter.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [axiosCounter.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const counterSelector = (state) => state.counter; // state
export const { increment, decrement } = counterSlice.actions; // 액션 생성 함수
export default counterSlice.reducer;
