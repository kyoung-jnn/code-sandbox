import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";

//
// store

/* before
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools); */

// after
export const store = configureStore({
  reducer: counterReducer,
  // middleware: [thunk, logger, ...getDefaultMiddleware(),],  미들웨어 추가 가능
});
