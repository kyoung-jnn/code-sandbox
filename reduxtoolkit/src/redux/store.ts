import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterReducer from "./counter";
import todosReducer from "./todos";

/* before
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools); 
*/

// after

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(logger), // 미들웨어 추가 가능
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
