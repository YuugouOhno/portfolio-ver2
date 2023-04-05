import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useProgress, useGLTF, useAnimations } from '@react-three/drei'
import Typography from '@mui/material/Typography'
import { OrbitControls } from '@react-three/drei'

const ModelPath = '/models/whale.glb'

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
    const gltf = useGLTF(ModelPath)
    const { actions } = useAnimations(gltf.animations, group)

    useEffect(() => {
        console.log(gltf) // find out the name of your action
        actions['Swim'].play()
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

export default function App() {
    return (
        <Canvas>
            <OrbitControls />

            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Suspense fallback={<Loader />}>
                <Model position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.6} />
            </Suspense>
        </Canvas>
    )
}
