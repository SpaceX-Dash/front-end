import React, {useState , useEffect}  from 'react';

import axios from 'axios';
import PastLaunchCard from './PastLaunchCard';

function PastLaunches() {
    const [pastLaunchData, setPastLaunchData] = useState();
    const [limit, setLimit] = useState(0);

    useEffect(() => {
    axios.get(`http://localhost:3001/pastLaunches/${limit}`) 
        .then(res => {
            setPastLaunchData(res.data)
            console.log(res.data)
        })
    },[])

    if(!pastLaunchData) {
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <div className="PastLaunches">
            {pastLaunchData.map(launch => {
                return <PastLaunchCard launchData={launch}/>
            })}
        </div>
    )
}

export default PastLaunches;