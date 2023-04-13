import AnimatedComponent from '@/components/animation/AppearanceContainer';
import BackgroundImage from "@/components/home/BackgroundImage";
import Whale from "@/components/home/Whale"

const Home = () => {
    return (
        <AnimatedComponent>
            <section id="home" className="pt-20 h-screen w-screen flex flex-col justify-center items-center">
                <Whale />
                <BackgroundImage />
                <div className="mt-56">
                    <h1 className="text-8xl font-bold text-center my-4">
                        Yuugou Ohno
                    </h1>
                    <h2 className="text-5xl font-bold text-center">
                        web engineer
                    </h2>
                </div>
            </section >
        </AnimatedComponent>
    )
}

export default Home;