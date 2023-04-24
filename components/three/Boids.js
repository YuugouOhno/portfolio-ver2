import { useRef, useContext } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';

import Biont from "@/components/three/Biont"

const Boids = () => {
    const { boids, setBoids } = useContext(BoidsContext);
    const sceneRef = useRef();
    // const boids = Array.from({ length: 400 }, (_, index) => index + 1);
    return (
        <scene ref={sceneRef}>
            {boids.map((biont, index) => (
                < Biont
                    sceneRef={sceneRef}
                    key={index}
                    id={biont}
                    position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}
                />
            ))}
        </scene>
    )
};

export default Boids;