// Model.js
import React, {useMemo} from 'react';
import { useGLTF } from '@react-three/drei';


const Model = ({ url, position, id, count=3 }) => {
    const gltf = useGLTF(url)

    const gltfs = useMemo(() => {
        if (gltf.scene) {
            return Array(count)
                .fill()
                .map(() => gltf.scene.clone());
        }
    }, [gltf, count]);


    console.log("魚",gltfs)

    return (
        <>
            {/* <group name="1">
                <primitive object={gltf.scene} position={[0, 0, 0]} />
            </group> */}
            {gltfs &&
                gltfs.map((gltf, index) => (
                    <group key={index} name={`model-${index + 1}`}>
                        <primitive object={gltf} position={[(index + 1) * 2, 0, 0]} />
                    </group>
                ))}
        </>
    );
};

export default Model;