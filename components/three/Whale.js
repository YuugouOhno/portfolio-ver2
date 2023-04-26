import { useEffect, useRef, Suspense, useContext } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import ThreeLoader from '@/components/three/ThreeLoader'
import { BoidsContext } from '@/contexts/BoidsContext';

const ModelPath = '/models/whale1.glb'

useGLTF.preload(ModelPath)

const Whale = () => {
    const { params } = useContext(BoidsContext);

    const group = useRef()
    const { size } = useThree()
    const gltf = useGLTF(ModelPath)
    const { actions } = useAnimations(gltf.animations, group)
    // モデルのscaleを調整する
    const scaleFactor = size.width / 1000

    useEffect(() => {
        actions['Swim'].play()
        group.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
    })

    useFrame(() => {
        group.current.rotation.y += 0.001
    })
    return (
        <Suspense fallback={<ThreeLoader />}>
            <group ref={group} dispose={null}>
                <group>
                    <primitive object={gltf.scene} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={params.whaleScale * 0.4}/>
                </group>
            </group>
        </Suspense>
    )
}

export default Whale