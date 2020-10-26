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
        <h1>Past Full Page render </h1>
        <p>now we got this </p>
        <a href={flightNumber.links.article_link}>Article Link</a>
    </div>
    );


}

export default PastLaunchesFull;