import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route exact path="/" component={Home}></Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
