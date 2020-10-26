import React from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import PastLaunchesFull from './components/Launches/pastLaunches/pastLaunchesFull/PastLaunchesFull';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Views/Home/Home';


function App() {

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route path="/pastLaunchesFull/:id">
          <PastLaunchesFull/>
      </Route>
      <Route exact path="/" component={Home}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
