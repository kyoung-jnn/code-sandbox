import React from "react";
import Button from "./components/Button";
import "./App.scss";

const App: React.FC = () => (
  <div className="title">
    React + Typescript + Webpack + Storybook
    <Button children={"버튼"}></Button>
  </div>
);

export default App;
