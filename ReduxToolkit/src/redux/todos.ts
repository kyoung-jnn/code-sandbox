import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk
export const getTodos = createAsyncThunk("todos/axiosTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export interface TodosState {
  isLoading: boolean;
  data: any;
  error: boolean;
}

const initialState: TodosState = {
  isLoading: false,
  data: null,
  error: false,
};

// createSlice 사용!
// action + reducer

/* export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  // map 형식의 typescript 구성
  extraReducers: {
    [getTodos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled.type]: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    [getTodos.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
}); */

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  // builder 형식의 typescript 구성
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getTodos.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const todosSelector = (state: any) => state.todos; // state
export default todosSlice.reducer;
