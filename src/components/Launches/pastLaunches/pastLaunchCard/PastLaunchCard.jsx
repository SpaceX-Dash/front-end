import React from 'react';

function PastLaunchCard(props) {
    console.log("FROM PASTLAUNCHES... ", props.launchData);

    const { launchData } = props;

    return( 
    <div className="PastLaunchCard">
        <h1>{launchData.mission_name}</h1>
        <div>{launchData.launch_date_local}</div>
    </div>
    )
}

export default PastLaunchCard;