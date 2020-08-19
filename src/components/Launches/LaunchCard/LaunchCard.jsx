import  React, {useState , useEffect} from 'react';

import axios from "axios";

function LaunchCard() {
    //     value   fn
    const [launchData, setLaunchData] = useState()
  
    useEffect(() => {
      axios("http://localhost:3001/nextLaunch")
      .then(res => {
        setLaunchData(res.data);
         console.log(res.data)
      })
      .catch(err => console.log(err))
    },[])
  
  
    if(!launchData){
      return(<h1>Loading...</h1>)
    }
  
    return (
      <div className="LaunchCard">
        
        <h2>Flight Number {launchData.flight_number}</h2>
        <div>{launchData.mission_name}</div>
        <p>{launchData.details}</p>
      </div>
    );
  }
  
  export default LaunchCard;