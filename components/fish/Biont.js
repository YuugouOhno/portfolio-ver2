import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
// import Biont from './Biont'
import * as THREE from 'three';
import {OrbitControls } from '@react-three/drei'


export const Box = ({ id, sceneRef, position }) => {
    const weight_to_separation = 0.01
    const separation_range = 10

    const boxes = []
    let this_box

    let v, v_separation, v_alignment, v_cohesion

    const setInitial = () => {
        v = new THREE.Vector3();
        v_separation = new Vector3();
        v_alignment = new THREE.Vector3();
        v_cohesion = new THREE.Vector3();
    }
    /**
     * 分離（Separation）
     */
    const getSeparation = () => {
        const separation_vector = new THREE.Vector3(0,0,0);
        let separation_count = 0;
        boxes.filter(box =>
            box.position.distanceTo(this_box.position) < separation_range
        ).map((box) => {
            const closeness = 1 / (Math.floor(box.position.distanceTo(this_box.position)) + 1);
            separation_vector.add(this_box.position.clone().sub(box.position).multiplyScalar(closeness));
            separation_count += 1;
            console.log(box.position.distanceTo(this_box.position))
        })
        if (separation_count) {
            separation_vector.divideScalar(separation_count);
        }
        v_separation = (separation_vector).multiplyScalar(weight_to_separation);
        console.log(v_separation)
    }

    /**
     * 整列（Alignment）
     */
    const getAlignment = () => {
        
    }

    /**
     * 凝集（Cohesion）
     */
    const getCohesion = () => {

    }

    // 進行方向を向く
    const setFaceDirection = () => {
        this.object.lookAt(this.xyz);
    }

    const update = () => {
        v.add(v_separation)
        v.add(v_alignment)
        v.add(v_cohesion)
        
    }

    useEffect(() => {
        sceneRef.current.traverse((obj) => {
            if (obj.type === "Mesh" && obj.geometry.type === "BoxGeometry" && obj.name != id) {
                boxes.push(obj)
            }
            if (obj.type === "Mesh" && obj.geometry.type === "BoxGeometry" && obj.name == id) {
                this_box = obj
                this_box.position.set(...position)
            }
        })
        console.log(this_box,boxes)
    })

    useFrame(() => {
        setInitial()
        getSeparation()
        update()
        this_box.position.add(v)
    })

    

    return (
        <mesh position={position} name={id}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

const Boids = () => {
    const sceneRef = useRef();

    const boxes = [1, 2, 3]

    return (
        <div className="w-screen h-screen">
            <Canvas>
                <scene ref={sceneRef}>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {boxes.map((box, index) => (
                        < Box sceneRef={sceneRef} key={index} id={box} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]} />
                    ))}
                </scene>
            </Canvas>
        </div>
    )
};

export default Boids;