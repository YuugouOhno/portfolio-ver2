import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import Whale from "@/components/three/Whale"
import Boids from "@/components/three/Boids"
import Model from "@/components/three/Model"

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

    const modelUrl = './models/tuna.glb';

    return (
        <div style={styles.canvasArea}>
            <Canvas style={styles.canvas}>
                <OrbitControls />

                <ambientLight intensity={0.5} />
                <spotLight position={[0, 10, 0]} angle={1} penumbra={1} />
                <pointLight position={[0, 10, 0]} />

                {/* <Whale /> */}
                <Boids />
                <Model url={modelUrl} position={[0, 0, 0]} id={1}/>
                <Model url={modelUrl} position={[2, 0, 0]} id={2}/>
            </Canvas>
        </div>
    )
}

export default ThreeCanvas