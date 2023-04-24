import { FaFish } from "react-icons/fa";
import { BoidsContext } from '@/contexts/BoidsContext';
import { useContext } from 'react';


const AddFish = () => {
    const { boids, setBoids } = useContext(BoidsContext);
    const Add = () => {
        setBoids([...boids, boids.length+1])
    }
    return (
        <button
            aria-label="add fish"
            type="button"
            className="p-3 h-12 w-12 order-3"
            onClick={() => Add()}
        >
            <FaFish className="h-6 w-6"/>
        </button>
    )
}
export default AddFish