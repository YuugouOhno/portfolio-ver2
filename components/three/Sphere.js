import { useContext } from "react"
import { BoidsContext } from '@/contexts/BoidsContext';
import { Sphere } from '@react-three/drei';

const Box = ({position, id}) => {
    const { params } = useContext(BoidsContext);

    return (
        <mesh position={position} name={id} scale={[params.sphereScaleX, params.sphereScaleY, params.sphereScaleZ]}>
            <sphereGeometry attach="geometry" args={[params.sphereScale, params.sphereShapeY, params.sphereShapeZ]}/>
            <meshStandardMaterial attach="material" color={params.sphereColor} />
        </mesh>
    )
}

export default Box