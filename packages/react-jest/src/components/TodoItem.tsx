import React, { ReactNode, useCallback } from "react";
import ITodo from "@src/types/todo";

interface TodoItemProps {
  children?: ReactNode;
  todo: ITodo;
  onToggle?: any;
  onRemove?: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
};

export default TodoItem;
