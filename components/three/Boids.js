import { useRef, useContext, useMemo } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';
import { useGLTF } from '@react-three/drei';

import Biont from "@/components/three/Biont"


const Boids = () => {
    const { boids, params } = useContext(BoidsContext);
    const sceneRef = useRef();
    
    const count = boids.length
    const gltf = useGLTF('./models/tuna.glb')

    const gltfs = useMemo(() => {
        if (gltf.scene) {
            return Array(count)
                .fill()
                .map(() => gltf.scene.clone());
        }
    }, [gltf, count]);

    return (
        <scene ref={sceneRef}>
            {boids.map((biont, index) => (
                < Biont
                    sceneRef={sceneRef}
                    key={index}
                    id={biont}
                    position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}
                    gltf={gltfs[index]}
                    mode={params.objectType}
                />
            ))}
        </scene>
    )
};

export default Boids;