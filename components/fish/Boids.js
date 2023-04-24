import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'


export const Box = ({ id, sceneRef, position }) => {
    const weight_to_separation = 0.1
    const weight_to_alignment = 0.01
    const weight_to_cohesion = 0.001
    const separation_range = 10
    const alignment_range = 50
    const cohesion_range = 30

    const boxes = []
    let this_box
    let v_separation, v_alignment, v_cohesion
    const v = new THREE.Vector3();
    const direction = new THREE.Vector3(0, 0, -1)

    const setInitial = () => {
        v_separation = new THREE.Vector3();
        v_alignment = new THREE.Vector3();
        v_cohesion = new THREE.Vector3();
    }

    /**
     * 分離（Separation）
     */
    const getSeparation = () => {
        const separation_vector = new THREE.Vector3(0, 0, 0);
        let separation_count = 0;
        boxes.filter(box =>
            box.position.distanceTo(this_box.position) < separation_range
        ).map((box) => {
            const closeness = 1 / (Math.floor(box.position.distanceTo(this_box.position)) + 1);
            separation_vector.add(this_box.position.clone().sub(box.position).multiplyScalar(closeness));
            separation_count += 1;
        })
        if (separation_count) {
            separation_vector.divideScalar(separation_count);
        }
        v_separation = separation_vector.multiplyScalar(weight_to_separation);
        console.log("分離（Separation）", v_separation)
    }

    /**
     * 整列（Alignment）
     */
    const getAlignment = () => {
        const alignment_vector = new THREE.Vector3();
        let alignment_count = 0;
        boxes.filter(box =>
            box.position.distanceTo(this_box.position) < alignment_range
        ).map((box) => {
            alignment_vector.add(direction.applyQuaternion(box.quaternion));
            alignment_count += 1;
        });
        if (alignment_count) {
            alignment_vector.divideScalar(alignment_count);
        }
        v_alignment = alignment_vector.multiplyScalar(weight_to_alignment);
        console.log("整列（Alignment）", v_alignment)
    }

    /**
     * 凝集（Cohesion）
     */
    const getCohesion = () => {
        const cohesion_vector = new THREE.Vector3();
        let cohesion_count = 0;
        boxes.filter(box =>
            // isInTheFieldOfVision(this_box.position, v, box.position) &&
            box.position.distanceTo(this_box.position) < cohesion_range
        ).forEach(box => {
            cohesion_vector.add(box.position.clone());
            cohesion_count += 1;
        });
        if (cohesion_count) {
            cohesion_vector.divideScalar(cohesion_count).sub(this_box.position);
        }
        v_cohesion = cohesion_vector.multiplyScalar(weight_to_cohesion);
        console.log("凝集（Cohesion）", v_cohesion)
    }

    // 進行方向を向く
    const setFaceDirection = () => {
        this_box.lookAt(v);
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
    })

    useFrame(() => {
        setInitial()
        getSeparation()
        getAlignment()
        getCohesion()
        update()
        setFaceDirection()
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
    const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    return (
        <div className="w-screen h-screen">
            <Canvas>
                <scene ref={sceneRef}>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {boxes.map((box, index) => (
                        < Box
                            sceneRef={sceneRef}
                            key={index}
                            id={box}
                            position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}
                        />
                    ))}
                </scene>
            </Canvas>
        </div>
    )
};

export default Boids;