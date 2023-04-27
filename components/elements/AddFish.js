import { useEffect, useRef, useState, useContext } from 'react';
import { FaFish } from "react-icons/fa";
import { BoidsContext } from '@/contexts/BoidsContext';


const AddFish = () => {
    const { boids, setBoids, isEndOfPage, showBoids, setShowBoids, showControl, setShowControl } = useContext(BoidsContext);
    const [rect, setRect] = useState()
    const Add = () => {
        setBoids([...boids, boids.length + 1])
        setShowBoids(true)
        if (isEndOfPage) {
            setShowControl(true)
        }
    }
    const stalkerRef = useRef();

    useEffect(() => {
        if (showBoids) {
            const timer = setTimeout(() => {
                setShowBoids(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showBoids]);

    useEffect(() => {
        if (stalkerRef.current) {
            setRect(stalkerRef.current.getBoundingClientRect())
        }
        if (isEndOfPage) {
            setShowControl(false)
            const handleMouseMove = (e) => {
                stalkerRef.current.style.top = `${rect.top}px)`;
                stalkerRef.current.style.left = `${rect.left}px`;
                stalkerRef.current.style.position = "fixed"
                stalkerRef.current.style.transform = `translate(${e.clientX - rect.x - rect.width / 2}px, ${e.clientY - rect.y - rect.height / 2}px)`;
            };

            document.addEventListener('mousemove', handleMouseMove);
            // クリーンアップ関数を返すことで、イベントリスナーを削除します
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [isEndOfPage]);

    const stalker = {
        transform: 'translate(0,0)',
        transition: 'transform 0.2s',
        transitionTimingFunction: 'ease-out',
        zIndex: '999',
        borderRadius: '50%'
    }

    return (
        <>
            {
                isEndOfPage
                    ? (<><div className="h-12 w-12 order-5"><button
                        style={stalker}
                        ref={stalkerRef}
                        aria- label="add fish"
                        type="button"
                        className={`m-1 p-3 h-12 w-12 order-5 bg-gray-300 dark:bg-gray-700 ${showControl?"hidden":""}`}
                        onClick={() => Add()}
                    >
                        <FaFish className="h-6 w-6" />
                    </button ></div></>)
                    : (<button
                        ref={stalkerRef}
                        aria-label="add fish"
                        type="button"
                        className="m-1 p-3 h-12 w-12 order-5  bg-opacity-50 dark:bg-opacity-50 bg-gray-300 dark:bg-gray-700 rounded-full"
                        onClick={() => Add()}
                    >
                        <FaFish className="h-6 w-6" />
                    </button>)
            }
        </>
    )
}
export default AddFish