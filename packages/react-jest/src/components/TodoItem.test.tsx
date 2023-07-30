import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";
import ITodo from "types/todo";

describe("<TodoItem />", () => {
  const sampleTodo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (props: ITodo) => {
    const initialProps = sampleTodo;
    const { getByText } = render(<TodoItem todo={initialProps} />);
    const todo = props || initialProps;
    const span = getByText(todo.text);
    const button = getByText("삭제");

    return {
      getByText,
      span,
      button,
    };
  };

  it("TodoItem 요소 존재 확인", () => {
    const { getByText } = render(<TodoItem todo={sampleTodo} />);
    const span = getByText(sampleTodo.text);
    const button = getByText("삭제");

    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("TodoItem UI 변화 - 완료", () => {
    const { getByText } = render(
      <TodoItem todo={{ ...sampleTodo, done: true }} />
    );
    const span = getByText(sampleTodo.text);
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("TodoItem UI 변화 - 비완료", () => {
    const { getByText } = render(
      <TodoItem todo={{ ...sampleTodo, done: false }} />
    );
    const span = getByText(sampleTodo.text);
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("onToggle 메소드", () => {
    const onToggle = jest.fn();
    const { getByText } = render(
      <TodoItem todo={sampleTodo} onToggle={onToggle} />
    );
    const span = getByText(sampleTodo.text);

    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("onRemove 메소드", () => {
    const onRemove = jest.fn();
    const { getByText } = render(
      <TodoItem todo={sampleTodo} onRemove={onRemove} />
    );
    const button = getByText("삭제");

    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
