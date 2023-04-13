import { FaFish } from "react-icons/fa";

const AddFish = () => {
    const Add = () => {
        console.log("AddFish")
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