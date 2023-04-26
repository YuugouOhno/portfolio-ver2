const Fish = ({ gltf, id, position }) => {
    return (
        <group name={id}>
            <primitive object={gltf} position={position} scale={2}/>
        </group>
    )
}

export default Fish;