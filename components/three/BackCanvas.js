import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Whale from "@/components/three/Whale"
import Boids from "@/components/three/Boids"

const BackCanvas = () => {
    return (
        <div className="fixed z-20 top-0 right-0 left-0 bottom-0 overflow-hidden pointer-events-none">
            <Canvas className="w-full h-full">
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} angle={1} penumbra={1} />
                <pointLight position={[0, 10, 0]} />
                <Whale />
            </Canvas>
        </div>
    )
}

export default BackCanvas