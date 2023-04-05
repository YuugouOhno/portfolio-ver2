import Image from "next/legacy/image";
import AnimatedComponent from '@/components/animation/AppearanceContainer';
import Parrot from "@/components/home/Parrot"

const Home = () => {
    return (
        <AnimatedComponent>
            <div id="home" className="pt-20 h-screen w-screen flex flex-col justify-center items-center">
                <Parrot />
                <Image
                    className="rounded-full"
                    src="/home/icon.png"
                    width={250}
                    height={250}
                    alt="icon"
                />
                <h1 className="text-8xl font-bold text-center my-4">
                    Yuugou Ohno
                </h1>
                <h2 className="text-5xl font-bold text-center">
                    web engineer
                </h2>
            </div >
        </AnimatedComponent>
    )
}

export default Home;