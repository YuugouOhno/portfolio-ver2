import Image from "next/legacy/image";

const BackgroundImage = () => {
    const styles = {
        bgImage: {
            position: "fixed",
            zIndex: "-2",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            overflow: "hidden",
        },

    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0" style={styles.bgImage}>
            <Image
                className="z"
                src="/bg/Ocean.jpg"
                alt="background image"
                layout="fill"
            />
        </div>
    )
}

export default BackgroundImage