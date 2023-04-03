import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const ThreeCanvas = () => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
            <OrbitControls />
        </Canvas>
    )
}

export default ThreeCanvas;