import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particle = ({ scene }) => {
    const mesh = useRef();

    useEffect(() => {
        const radius = Math.random() * 0.002 + 0.0003;
        const geometry = new THREE.IcosahedronGeometry(radius, 0);
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(`hsl(${Math.random() * 50 + 180}, 100%, 80%)`),
            flatShading: true,
        });

        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(0, 0, 1.5);
        mesh.current = particle;
        scene.add(particle);

        return () => {
            scene.remove(particle);
        };
    }, [scene]);

    return null;
};

const Tunnel = () => {
    const tubeMesh = useRef();

    const { viewport, mouse } = useThree();
    const [tubeGeometry, setTubeGeometry] = useState(new THREE.BufferGeometry());
    // const [curve, setCurve] = useState(new THREE.CatmullRomCurve3([]));
    const [curve, setCurve] = useState(new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.3, -0.3, 0),
        new THREE.Vector3(-0.15, 0.3, 0),
        new THREE.Vector3(0, -0.3, 0),
        new THREE.Vector3(0.15, 0.3, 0),
        new THREE.Vector3(0.3, -0.3, 0),
    ]));

    useEffect(() => {
        const points = [];
        for (let i = 0; i < 5; i++) {
            points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)));
        }
        points[4].y = -0.06;
        const newCurve = new THREE.CatmullRomCurve3(points);
        newCurve.type = "catmullrom";
        setCurve(newCurve);

        const geometry = new THREE.TubeGeometry(newCurve, 70, 0.02, 30, false);
        setTubeGeometry(geometry);
    }, []);

    useFrame(({ camera, mouse }) => {
        console.log("tet")
        camera.rotation.z = (mouse.x * 2 - 0.5) * Math.PI;
        camera.rotation.y = Math.PI - (mouse.x * 0.3 - 0.15);
        camera.position.x = (mouse.x * 0.044 - 0.025);
        camera.position.y = (mouse.y * 0.044 - 0.025);

        curve.points[2].x = 0.6 * (1 - mouse.x) - 0.3;
        curve.points[4].x = 0.6 * (1 - mouse.x) - 0.3;
        curve.points[2].y = 0.6 * (1 - mouse.y) - 0.3;
        curve.points[4].y = 0.6 * (1 - mouse.y) - 0.3;

        const geometry = new THREE.TubeGeometry(curve, 70, 0.02, 30, false);
        // setTubeGeometry(geometry);
        if (tubeMesh.current) {
            tubeMesh.current.geometry.dispose(); // 既存の geometry を破棄
            tubeMesh.current.geometry = geometry; // 新しい geometry を適用
        }
    });

    return (
        <mesh ref={tubeMesh} geometry={tubeGeometry}>
            <meshBasicMaterial
                attach="material"
                side={THREE.BackSide}
                color={0xffffff}
            />
        </mesh>
    );
};

const Tube = () => {
    const camera = useRef();
    const [scene, setScene] = useState(null);
    const [particles, setParticles] = useState([]);
    
    useEffect(() => {
        if (scene) {
            const newParticles = [...particles];
            while (newParticles.length < (isMobile ? 70 : 150)) {
                newParticles.push(<Particle key={newParticles.length} scene={scene} />);
            }
            setParticles(newParticles);
        }
    }, [scene]);

    return (
        <Canvas
            style={{ background: 'radial-gradient(at 50% 70%, #200a40, #0a050e)' }}
            onCreated={({ camera }) => {
                camera.position.z = 0.35;
            }}
        >
            <perspectiveCamera ref={camera} fov={15} near={0.01} far={100} />
            <ambientLight intensity={0.5} />
            <Tunnel />
        </Canvas>
    );
};

export default Tube;