import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function PastLaunchesFull(s) {
    const {id} = useParams();
 
    console.log(id);
    const [flightNumber, setFlightNumber] = useState();

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/launches?flight_number=${id}`) 
            .then(res => {
                setFlightNumber(res.data[0])
                console.log(res.data)
            })
        },[])

        
    
        console.log(flightNumber);


        if(!flightNumber) return <h1> Loading.... </h1>

    return (
        <div>
            <h1 id="mission-name">{flightNumber.mission_name} </h1>
            <div>
            <img src={flightNumber.links.mission_patch} alt="" height="150" width="150"></img>
            </div>
            <p>Flight Number : {flightNumber.flight_number} </p>
            <div>{flightNumber.details}</div>
            <a href={flightNumber.links.article_link}>Article Link</a>

        </div>
    );


}

export default PastLaunchesFull;