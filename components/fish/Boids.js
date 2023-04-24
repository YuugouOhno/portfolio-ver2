import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

import Biont from "@/components/fish/Biont"

const Boids = () => {
    const sceneRef = useRef();
    const boids = Array.from({ length: 400 }, (_, index) => index + 1);
    return (
        <scene ref={sceneRef}>
            <OrbitControls defaultCameraPosition={[0, 0, 0]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
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