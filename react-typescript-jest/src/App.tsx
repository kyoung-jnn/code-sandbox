import TodoForm from "components/TodoForm";
import React from "react";
import "./App.scss";
import logo from "./assets/logo.png";
import react from "./assets/react.png";

const App: React.FC = () => (
  <div className="title">
    <img className="image" src={react}></img>
    <TodoForm></TodoForm>
  </div>
);

export default App;
