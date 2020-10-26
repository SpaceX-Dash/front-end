import React from 'react';
import {useHistory} from 'react-router-dom';
import PastLaunchesFull from '../pastLaunchesFull/PastLaunchesFull';
import './styles.scss';

function PastLaunchCard(props) {
    console.log("FROM PASTLAUNCHES... ", props.launchData);
    const history = useHistory();
    

    const { launchData } = props;
    console.log(launchData.links.mission_patch_small)

    const date = launchData.launch_date_local.split("T")[0];

    function truncateText(text) {
        const content = text.substring(0, 128).trim() + ' ...';
        return content;
    }

    
    return( 
    <div className="PastLaunchCard" onClick={()=>history.push(`pastLaunchesFull/${launchData.flight_number}`)}>
        <div className="container-top" >
            <img src={launchData.links.mission_patch_small ? launchData.links.mission_patch_small : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png"} alt="patch"></img>
            <div className="container-title">{launchData.mission_name}</div>
        </div>
        <div className="container-bottom">
            <div>{date}</div>
            <div>{launchData.rocket.rocket_name}</div>
            <div>{truncateText(launchData.details)} </div>
        </div>
    </div>
    )
}

export default PastLaunchCard;