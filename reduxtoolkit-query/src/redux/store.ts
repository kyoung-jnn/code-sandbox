import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./todos";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  // 캐싱, 캐시 무효화, 폴링 등 기능을 위한 미들웨어
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, logger), // 미들웨어 추가 가능
});

// optional
// refetchOnFocus, refetchOnReconnect 사용하기 위해 필수
setupListeners(store.dispatch);
