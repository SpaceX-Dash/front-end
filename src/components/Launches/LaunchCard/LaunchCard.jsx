import  React, {useState , useEffect} from 'react';
import './styles.scss';

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

    console.log("THE NEXT ONE..." + launchData);
    
  
    return (
      <div className="LaunchCard">
        <h1>NEXT LAUNCH</h1>
        <h2>Flight Number {launchData.flight_number}</h2>
        <div className="launch-date">{launchData.launch_date_local}</div>
        <div>{launchData.mission_name}</div>
        <p className="details">{launchData.details}</p>
      </div>
    );
  }
  
  export default LaunchCard;