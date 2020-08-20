import React from 'react';
import './styles.scss';

function PastLaunchCard(props) {
    console.log("FROM PASTLAUNCHES... ", props.launchData);

    const { launchData } = props;
    console.log(launchData.links.mission_patch_small)

    const unixStamp = 1143239400
    const dateObject = new Date(unixStamp * 1000);
    const formatedDate = dateObject.toLocaleString()
    let date = formatedDate.split(",")
    date = date[0]

    function truncateText(text) {
        const content = text.substring(0, 128).trim() + ' ...';
        return content;
    }


    
    return( 
    <div className="PastLaunchCard">
        <div className="container-top">
            <img src={launchData.links.mission_patch_small ? launchData.links.mission_patch_small : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png"}></img>
            <div className="container-title">{launchData.mission_name}</div>
        </div>
        <div className="container-bottom">
            <div>{launchData.launch_date_unix}</div>
            <div>{launchData.rocket.rocket_name}</div>
            <div>{truncateText(launchData.details)} </div>
        </div>
    </div>
    )
}

export default PastLaunchCard;