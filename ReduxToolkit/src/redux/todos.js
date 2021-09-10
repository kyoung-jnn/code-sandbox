import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//
// createAsyncThunk
export const axiosTodos = createAsyncThunk("todos/axiosTodos", async () => {
  // 비동기 호출 함수를 정의
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// createSlice 사용!
// action + reducer
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [axiosTodos.pending]: (state) => {
      state.loading = true;
    },
    [axiosTodos.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [axiosTodos.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const todosSelector = (state) => state.todos; // state
export default todosSlice.reducer;
