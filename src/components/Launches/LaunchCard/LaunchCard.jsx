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

    var checkLaunchDate = function(firstDate, secondDate) {
      if (firstDate < secondDate) {    
        return true;
      }

      return false;
    };

    const launchDate = launchData.launch_date_local.slice(0, 10).replaceAll('-','');

    const today = new Date();
    const todayYear = today.getFullYear(); 
    let todayMonth = (today.getMonth()+1); 
    const todayDay = today.getDate();
    
    if (todayMonth < 10) {
       todayMonth = '0' + todayMonth;
    }

    const formatToday = todayYear + "" + todayMonth + "" + todayDay;
   
    if(checkLaunchDate(launchDate, formatToday)) {
      return (
        <div className="LaunchCard">
          <h1>Oppsie POSTMAN SPACE X is returning an error</h1>
          <h2>The information for the next Launch should be updated soon</h2>
        </div>
      )
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