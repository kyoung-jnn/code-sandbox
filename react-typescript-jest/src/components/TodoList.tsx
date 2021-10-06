import React from "react";
import TodoItem from "./TodoItem";
import ITodo from "types/todo";

interface TodoListProp {
  todos: ITodo[];
  onToggle?: any;
  onRemove?: any;
}

const TodoList: React.FC<TodoListProp> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
