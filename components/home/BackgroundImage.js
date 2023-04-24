import Image from "next/legacy/image";

const BackgroundImage = () => {
    const styles = {
        bgImage: {
            zIndex: "-2",
        },

    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0" style={styles.bgImage} as="image">
            <Image
                className="z"
                src="/bg/Ocean.jpg"
                alt="background image"
                objectFit="cover"
                layout='fill'
                priority={true}
            />
        </div>
    )
}

export default BackgroundImage