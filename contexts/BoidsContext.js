import React, { useState } from 'react';

const BoidsContext = React.createContext();

function BoidsContextProvider({ children }) {
    const [boids, setBoids] = useState([1, 2, 3, 4, 5]);
    const [isEndOfPage, setIsEndOfPage] = useState(false);
    const [showBoids, setShowBoids] = useState(false);
    const [showControl, setShowControl] = useState(false)
    const [params, setParams] = useState({objectType:"fish",whaleScale:1})

    return (
        <BoidsContext.Provider value={{ boids, setBoids, isEndOfPage, setIsEndOfPage, showBoids, setShowBoids, showControl, setShowControl, params, setParams }}>
            {children}
        </BoidsContext.Provider>
    );
}

export { BoidsContext, BoidsContextProvider };