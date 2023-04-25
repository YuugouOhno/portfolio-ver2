import { Children, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

import Fish from "@/components/three/Fish"


const Biont = ({ id, sceneRef, position, gltf }) => {
    const weight_to_separation = 1
    const weight_to_alignment = 0.001
    const weight_to_cohesion = 0.001
    const weight_to_center = 0.0001
    const weight_speed = 1

    const max_speed = 1

    const action_range = 50

    const separation_range = action_range * 0.05
    const alignment_range = action_range * 0.3
    const cohesion_range = action_range * 0.3


    const boids = []
    let this_biont, v_separation, v_alignment, v_cohesion
    const v = new Vector3();
    const direction = new Vector3(0, 0, -1)
    const center_of_boids = new Vector3(0, 0, 0)

    // 初期値の設定
    const setInitial = () => {
        v_separation = new Vector3();
        v_alignment = new Vector3();
        v_cohesion = new Vector3();
    }

    /**
     * 分離（Separation）
     */
    const getSeparation = () => {
        const separation_vector = new Vector3(0, 0, 0);
        let separation_count = 0;
        boids.filter(biont =>
            biont.position.distanceTo(this_biont.position) < separation_range
            // && isInTheFieldOfVision(this_biont.position, biont.position)
        ).map((biont) => {
            const closeness = 1 / (Math.floor(biont.position.distanceTo(this_biont.position)) ** 2 + 1);
            separation_vector.add(this_biont.position.clone().sub(biont.position).multiplyScalar(closeness));
            separation_count += 1;
        })
        if (separation_count) {
            separation_vector.divideScalar(separation_count);
        }
        v_separation = separation_vector.multiplyScalar(weight_to_separation);
        // console.log("分離（Separation）", v_separation)
    }

    /**
     * 整列（Alignment）
     */
    const getAlignment = () => {
        const alignment_vector = new Vector3();
        let alignment_count = 0;
        boids.filter(biont =>
            biont.position.distanceTo(this_biont.position) < alignment_range
            && isInTheFieldOfVision(this_biont.position, biont.position)
        ).map((biont) => {
            alignment_vector.add(direction.applyQuaternion(biont.quaternion));
            alignment_count += 1;
        });
        if (alignment_count) {
            alignment_vector.divideScalar(alignment_count);
        }
        v_alignment = alignment_vector.multiplyScalar(weight_to_alignment);
        // console.log("整列（Alignment）", v_alignment)
    }

    /**
     * 凝集（Cohesion）
     */
    const getCohesion = () => {
        const cohesion_vector = new Vector3();
        let cohesion_count = 0;
        boids.filter(biont =>
            biont.position.distanceTo(this_biont.position) < cohesion_range &&
            isInTheFieldOfVision(this_biont.position, biont.position)
        ).forEach(biont => {
            cohesion_vector.add(biont.position.clone());
            cohesion_count += 1;
        });
        if (cohesion_count) {
            cohesion_vector.divideScalar(cohesion_count).sub(this_biont.position);
        }
        v_cohesion = cohesion_vector.multiplyScalar(weight_to_cohesion);
        // console.log("凝集（Cohesion）", v_cohesion)
    }

    // 進行方向を向く
    const setFaceDirection = () => {
        this_biont.lookAt(v);
    }

    // 行動範囲の制限
    const setActionRange = () => {
        if (center_of_boids.distanceTo(this_biont.position) > action_range) {
            const distance = center_of_boids.distanceTo(this_biont.position) - action_range;
            v.sub(this_biont.position.clone().multiplyScalar(0.1).multiplyScalar(distance * weight_to_center));
        }
    }

    const isInTheFieldOfVision = (vector1, vector2) => {
        return vector1.dot(vector2) > 0
    }

    const update = () => {
        v.add(v_separation)
        v.add(v_alignment)
        v.add(v_cohesion)
        v.multiplyScalar(weight_speed);
        if (v.length() > max_speed) {
            v.multiplyScalar(max_speed / v.length());
        }
        v.y *= 0.9;
    }

    useEffect(() => {
        // sceneRef.current.traverse((obj) => {
        //     if (obj.type === "Mesh" && obj.geometry.type === "BoxGeometry" && obj.name != id) {
        //         boids.push(obj)
        //     }
        //     if (obj.type === "Mesh" && obj.geometry.type === "BoxGeometry" && obj.name == id) {
        //         this_biont = obj
        //         this_biont.position.set(...position)
        //     }
        // })
        sceneRef.current.traverse((obj) => {
            if (obj.type === "Group" && typeof obj.name === "number" && obj.name != id) {
                boids.push(obj)
            }
            if (obj.type === "Group" && typeof obj.name === "number" && obj.name == id) {
                this_biont = obj
                this_biont.position.set(...position)
            }
        })
        console.log(boids,this_biont)
    })

    useFrame(() => {
        setInitial()
        getSeparation()
        getAlignment()
        getCohesion()
        setActionRange()
        update()
        setFaceDirection()
        this_biont.position.add(v)
    })

    return (
        // <mesh position={position} name={id}>
        //     <boxGeometry attach="geometry" args={[1, 1, 1]} />
        //     <meshStandardMaterial attach="material" color="hotpink" /> 
        // </mesh>
        <>
            <Fish gltf={gltf} id={id} position={position} />
        </>
    )
}

export default Biont