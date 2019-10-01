import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import './App.css';
import Navbar from './components/layout/Navbar';
import Herku from './components/layout/Herku';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route path="/herku" component={Herku}></Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
