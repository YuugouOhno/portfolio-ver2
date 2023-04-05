import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useProgress, useGLTF, useAnimations } from '@react-three/drei'
import Typography from '@mui/material/Typography'
import { OrbitControls } from '@react-three/drei'

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
    const gltf = useGLTF(ModelPath)
    const { actions } = useAnimations(gltf.animations, group)

    useEffect(() => {
        console.log(gltf) // find out the name of your action
        actions['Swim'].play()
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
    return (
        <Canvas>
            <OrbitControls />

            <ambientLight intensity={0.5} />
            <spotLight position={[0, 10, 0]} angle={1} penumbra={1} />
            <pointLight position={[0, 10, 0]} />

            <Suspense fallback={<Loader />}>
                <Model position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.6} />
            </Suspense>
        </Canvas>
    )
}

export default Whale