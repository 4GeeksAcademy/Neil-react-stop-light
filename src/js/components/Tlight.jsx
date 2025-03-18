import React, { useState } from 'react';
import "../../styles/index.css";

const Tlight = () => {
    const [selected, setSelected] = useState("red"); 

    return (
        <div>
            <div className="pole"></div>
            <div className="trafficLight">
                <div 
                    onClick={() => { setSelected("red") }} 
                    className={selected == "red" ? "lightGlow red" : "red"}
                ></div>
                <div 
                    onClick={() => { setSelected("yellow") }} 
                    className={selected == "yellow" ? "lightGlow yellow" : "yellow"}
                ></div>
                <div 
                    onClick={() => { setSelected("green") }} 
                    className={selected == "green" ? "lightGlow green" : "green"}
                ></div>
            </div>
        </div>
    );
};

export default Tlight;