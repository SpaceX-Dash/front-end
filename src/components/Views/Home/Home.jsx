import React from 'react';
import LaunchCard from '../../Launches/LaunchCard/LaunchCard';
import PastLaunches from '../../Launches/pastLaunches/PastLaunches';

function Home() {

    return(
        <div>
            <LaunchCard/>
            <PastLaunches/>
        </div>
    );
}

export default Home; 