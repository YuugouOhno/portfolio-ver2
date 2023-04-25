import React, { useState } from 'react';

const BoidsContext = React.createContext();

function BoidsContextProvider({ children }) {
    const [boids, setBoids] = useState([1, 2, 3, 4, 5]);
    const [isEndOfPage, setIsEndOfPage] = useState(false);

    return (
        <BoidsContext.Provider value={{ boids, setBoids, isEndOfPage, setIsEndOfPage }}>
            {children}
        </BoidsContext.Provider>
    );
}

export { BoidsContext, BoidsContextProvider };