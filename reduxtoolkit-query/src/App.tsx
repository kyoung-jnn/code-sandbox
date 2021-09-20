import React from "react";

import { useGetPostQuery, useGetPostsQuery } from "./redux/todos";

const App: React.FC = () => {
  // Hooks를 사용하면 자동으로 데이터를 가져오고 쿼리로부터 얻은 값을 반환합니다.
  const { data, error, isLoading } = useGetPostQuery("1");

  return (
    <section>
      <h1>RTK Query</h1>
      {error ? (
        <>앗, 오류가 발생했습니다.</>
      ) : isLoading ? (
        <>로딩중...</>
      ) : data ? (
        <>
          <h3>{data.title}</h3>
          <div>{data.body}</div>
        </>
      ) : null}
    </section>
  );
};

export default App;
