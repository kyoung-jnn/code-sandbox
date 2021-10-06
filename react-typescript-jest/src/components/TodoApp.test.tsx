import React from "react";
import TodoApp from "./TodoApp";
import { render, fireEvent } from "@testing-library/react";

describe("<TodoApp />", () => {
  it("TodoForm and TodoList 렌더링", () => {
    const { getByTestId } = render(<TodoApp />);

    getByTestId("TodoForm"); // TodoForm 존재유무 확인
    getByTestId("TodoList"); // TodoList 존재유무 확인 data-testid 이용
  });

  it("TodoItem 렌더링", () => {
    const { getByText } = render(<TodoApp />);

    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });

  it("새로운 todo 추가", () => {
    const { getByText, getByPlaceholderText } = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("등록"));
    getByText("새 항목 추가하기");
  });
});
