const Fish = ({ gltf, index, position }) => {
    return (
        <group key={index}>
            <primitive object={gltf} position={position} />
        </group>
    )
}

export default Fish;