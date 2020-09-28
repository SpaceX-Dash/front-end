import React from 'react';
import './App.scss';
import LaunchCard  from './components/Launches/LaunchCard/LaunchCard.jsx';
import NavBar from './components/navbar/NavBar';
import PastLaunches from './components/Launches/pastLaunches/PastLaunches';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <LaunchCard/>
      <PastLaunches/>
    </div>
  );
}

export default App;
