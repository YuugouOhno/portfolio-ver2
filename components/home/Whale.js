
// import { useRef } from 'react';
// import * as THREE from 'three';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const Whale = () => {
//     const groupRef = useRef();
//     // const { nodes, animations } = useLoader(GLTFLoader, '/models/whale.glb');
//     const { nodes, animations } = useLoader(GLTFLoader, "/models/whale.glb", loader => {
//         //
//     });
//     const mixer = new THREE.AnimationMixer();

//     useFrame((state, delta) => {
//         mixer.update(delta);
//     });

//     useEffect(() => {
//         const clips = animations.filter((clip) => clip.name !== '__glTF__scene');
//         const actions = clips.map((clip) => mixer.clipAction(clip));
//         actions.forEach((action) => {
//             action.play();
//         });

//         return () => {
//             actions.forEach((action) => {
//                 action.stop();
//                 mixer.uncacheAction(action);
//             });
//         };
//     }, [animations, mixer]);

//     return (
//         <Canvas>
//             <OrbitControls />
//             <group ref={groupRef} {...props}>
//                 <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}>
//                     {animations.map((clip) => (
//                         <primitive key={clip.name} object={clip.action} />
//                     ))}
//                 </mesh>
//             </group>
//         </Canvas>
//     )
// }

// export default Whale;