import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base URL과 엔드포인트들을 정의
export const postApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
      query: () => `/`,
    }),
    getPost: builder.query<any, string>({
      query: (num) => `/${num}`,
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 훅 생성
// 함수형 컴포넌트에서 사용하기 위해 export
export const { useGetPostsQuery, useGetPostQuery } = postApi;
