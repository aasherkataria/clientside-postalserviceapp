import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Packages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/about" component={About} />
          <Route path = "/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (  
  <div>
    <h1>Home Page</h1>
  </div>
)};

export default App;
