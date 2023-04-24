import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const ThreeCanvas = () => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <OrbitControls />
        </Canvas>
    )
}

export default ThreeCanvas;