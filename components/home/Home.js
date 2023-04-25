import AnimatedComponent from '@/components/animation/AppearanceContainer';

const Home = () => {
    return (
        <AnimatedComponent>
            <section id="home" className="pt-20 h-screen w-screen flex flex-col justify-center items-center z-30 relative">
                <div className="mt-56">
                    <h1 className="text-8xl font-bold text-center my-4 text-white">
                        Yuugou Ohno
                    </h1>
                    <h2 className="text-5xl font-bold text-center text-white">
                        web engineer
                    </h2>
                </div>
            </section >
        </AnimatedComponent>
    )
}

export default Home;