import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, useProgress, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import Typography from '@mui/material/Typography'
import Boids from "@/components/fish/Boids"

const ModelPath = '/models/whale1.glb'

const Loader = () => {
    const { progress } = useProgress()
    return (
        <Html center>
            <Typography variant="h6" gutterBottom>
                {progress} % loaded
            </Typography>
        </Html>
    )
}

const Model = (props) => {
    const group = useRef()
    const { size } = useThree()
    const gltf = useGLTF(ModelPath)
    const { actions } = useAnimations(gltf.animations, group)
    // モデルのscaleを調整する
    const scaleFactor = size.width / 1000
    
    useEffect(() => {
        actions['Swim'].play()
        group.current.scale.set(scaleFactor,scaleFactor,scaleFactor)
    })

    useFrame(() => {
        group.current.rotation.y += 0.01
    })

    return (
        <>
            <group ref={group} dispose={null}>
                <group scale={props.scale}>
                    <primitive object={gltf.scene} position={props.position} rotation={props.rotation} scale={props.scale} />
                </group>
            </group>
        </>
    )
}

useGLTF.preload(ModelPath)

const Whale = () => {
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

                <Suspense fallback={<Loader />}>
                    <Model position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.6} />
                </Suspense>
                <Boids />
            </Canvas>
        </div>
    )
}

export default Whale