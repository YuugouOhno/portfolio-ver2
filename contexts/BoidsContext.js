import React, { useState } from 'react';

const BoidsContext = React.createContext();

function BoidsContextProvider({ children }) {
    const [boids, setBoids] = useState([1, 2, 3, 4, 5]);
    const [isEndOfPage, setIsEndOfPage] = useState(false);
    const [showBoids, setShowBoids] = useState(false);
    const [showControl, setShowControl] = useState(false)
    const [params, setParams] = useState({
        objectType: "fish",
        whaleScale: 1,
        fishScale: 1,

        boxScale: 1,
        boxScaleX: 1,
        boxScaleY: 1,
        boxScaleZ: 1,
        boxColor: "#ffffff",

        sphereScale: 1,
        sphereShapeY: 24,
        sphereShapeZ: 24,
        sphereScaleX: 1,
        sphereScaleY: 1,
        sphereScaleZ: 1,
        sphereColor: "#ffffff",

        speed: 1,
        max_speed: 1,
        vectorX: 1,
        vectorY: 0.9,
        vectorZ: 1,
        
        weight_to_separation: 1,
        weight_to_alignment: 0.001,
        weight_to_cohesion: 0.001,
        weight_to_center: 0.0001,

        separation_range: 2,
        alignment_range: 15,
        cohesion_range: 15,
        action_range: 50,
    })

    return (
        <BoidsContext.Provider value={{ boids, setBoids, isEndOfPage, setIsEndOfPage, showBoids, setShowBoids, showControl, setShowControl, params, setParams }}>
            {children}
        </BoidsContext.Provider>
    );
}

export { BoidsContext, BoidsContextProvider };