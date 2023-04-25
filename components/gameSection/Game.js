import { useContext } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';


const Game = () => {
    const { isEndOfPage, setIsEndOfPage } = useContext(BoidsContext);

    return (
        <section id="game" className={`h-screen w-screen flex flex-col justify-center items-center relative ${isEndOfPage ? "z-10" : "z-30"}`}>
                <h1 className="text-8xl font-bold text-center my-4 text-white">
                    play with fish
                </h1>
        </section>
    )
}

export default Game;