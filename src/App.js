import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Packages from './components/Packages';
import PackagesForm from './components/PackagesForm';
import { PackageProvider } from './context/Package';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <PackageProvider>  
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/about" component={About} />
          <Route path = "/packages" component={Packages} />
          <Route path = "/edit-package" component={PackagesForm} />
        </Switch>
      </div>
    </Router>
  </PackageProvider>
  );
}

const Home = () => {
  return (  
  <div>
    <h1>Home Page</h1>
  </div>
)};

export default App;
