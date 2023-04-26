import { useContext } from "react" 
import { BoidsContext } from '@/contexts/BoidsContext';
const Fish = ({ gltf, id, position }) => {
    const { params } = useContext(BoidsContext);
    return (
        <group name={id}>
            <primitive object={gltf} position={position} scale={params.fishScale}/>
        </group>
    )
}

export default Fish;