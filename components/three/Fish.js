import { useContext } from "react" 
import { BoidsContext } from '@/contexts/BoidsContext';
const Fish = ({ gltf, id, position }) => {
    const { params } = useContext(BoidsContext);
    console.log(gltf)
    return (
        <group name={id}>
            <primitive object={gltf} position={position} scale={params.fishScale} color="hotpink"/>
        </group>
    )
}

export default Fish;