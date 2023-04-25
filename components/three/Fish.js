const Fish = ({ gltf, id, position }) => {
    return (
        <group name={id}>
            <primitive object={gltf} position={position} />
        </group>
    )
}

export default Fish;