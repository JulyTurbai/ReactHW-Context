import React from 'react';
import Planet from './Planet';
import BackgroundChanger from '../components/BackgroundChanger';
import { MyContextProvider2 } from '../Context/MyContextProvider2';

const Planets = () => {
    
    return (
        <>
            <div className="planets">
                <Planet/>
            </div>
            <div className="back-controller">
                <MyContextProvider2>
                    <BackgroundChanger />
                </MyContextProvider2>
            </div>
        </>
    );
};

export default Planets;