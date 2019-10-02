import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import './App.css';
import Navbar from './components/layout/Navbar';
import Herku from './components/layout/Herku';
import Christmas from './components/layout/Christmas';
import Group from './components/layout/Group';
import Drinks from './components/layout/Drinks';
import Gallery from './components/layout/Gallery';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route path="/herku" component={Herku}></Route>
         <Route path="/christmas" component={Christmas}></Route>
         <Route path="/group" component={Group}></Route>
         <Route path="/drinks" component={Drinks}></Route>
         <Route path="/gallery" component={Gallery}></Route>
       </Switch>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
