import { useContext } from "react"
import { BoidsContext } from '@/contexts/BoidsContext';

const Box = ({position, id}) => {
    const { params } = useContext(BoidsContext);

    return (
        <mesh position={position} name={id}>
            <boxGeometry attach="geometry" args={[params.boxScaleX * params.boxScale, params.boxScaleY * params.boxScale, params.boxScaleZ * params.boxScale]}/>
            <meshStandardMaterial attach="material" color={params.boxColor} />
        </mesh>
    )
}

export default Box