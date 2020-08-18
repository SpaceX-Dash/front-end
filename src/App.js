import React from 'react';
import './App.css';
import LaunchCard  from './components/Launches/LaunchCard';
import NavBar from './components/navbar/NavBar';
import PastLaunches from './components/Launches/PastLaunches';


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
