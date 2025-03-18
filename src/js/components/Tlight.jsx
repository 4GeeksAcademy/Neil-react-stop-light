import React, { useState } from 'react';
import "../../styles/index.css"



const Tlight = () => {
    const [color, setColor] = useState("red");

    return (
        <div>
            <div className="pole"></div>
            <div className="trafficLight">
                
                <div className="red"></div>
                
                <div className="yellow"></div>
                
                <div className="green"></div>
            </div>

        </div>



    );
};

export default Tlight;