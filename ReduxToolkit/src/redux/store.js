import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter";
import todosReducer from "./todos";

/* before
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools); */

// after
export const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // 미들웨어 추가 가능
});
