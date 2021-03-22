import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" />
      <Route path="/" />
    </Switch>
  );
};

export default App;
