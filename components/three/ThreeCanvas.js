import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import Whale from "@/components/three/Whale"
import Boids from "@/components/three/Boids"

const ThreeCanvas = () => {
    const styles = {
        canvasArea: {
            position: "fixed",
            zIndex: "-1",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            overflow: "hidden",
        },

        canvas: {
            zIndex: "-1",
            width: "100%",
            height: "100%",
        }
    }
    return (
        <div style={styles.canvasArea}>
            <Canvas style={styles.canvas}>
                <OrbitControls />

                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} angle={1} penumbra={1} />
                <pointLight position={[0, 10, 0]} />

                <Whale />
                <Boids />
            </Canvas>
        </div>
    )
}

export default ThreeCanvas