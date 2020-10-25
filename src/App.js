import React from 'react';
import './App.scss';
import LaunchCard  from './components/Launches/LaunchCard/LaunchCard.jsx';
import NavBar from './components/navbar/NavBar';
import PastLaunches from './components/Launches/pastLaunches/PastLaunches';
import PastLaunchesFull from './components/Launches/pastLaunches/pastLaunchesFull/PastLaunchesFull';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <LaunchCard/>
        <PastLaunches/>
      
      </Route>
      <Route path="/pastLaunchFull">
          <PastLaunchesFull/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
