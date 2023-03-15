import Image from 'next/image';

const Home = () => {
    return (
        <div id="home" className="pt-20 h-screen w-screen flex flex-col justify-center items-center">
            <Image className="rounded-full" src="/homeicon.png" width={250} height={250} />
            <h1 className="text-8xl font-bold text-center my-4">Yuugou Ohno</h1>
            <h2 className="text-5xl font-bold text-center">web engineer</h2>
        </div>
    )
}

export default Home;