import React, { useState } from 'react';

const BoidsContext = React.createContext();

function BoidsContextProvider({ children }) {
    const [boids, setBoids] = useState([1,2,3,4,5]);

    return (
        <BoidsContext.Provider value={{ boids, setBoids }}>
            {children}
        </BoidsContext.Provider>
    );
}

export { BoidsContext, BoidsContextProvider };