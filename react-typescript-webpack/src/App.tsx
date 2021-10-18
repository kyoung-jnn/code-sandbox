import React from 'react';
import './App.scss';
import react from './assets/react.png';

const App: React.FC = () => (
  <div className="title">
    React + Typescript + Webpack
    <img className="image" src={react}></img>
  </div>
);

export default App;
