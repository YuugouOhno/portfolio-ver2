import { GrLanguage } from "react-icons/gr";

const LanguageToggle = () => {
    const changeLanguage = () => {
        console.log("changeLanguage")
    }
    return (
        <button
            aria-label="add fish"
            type="button"
            className="p-3 h-12 w-12 order-4"
            onClick={() => changeLanguage()}
        >
            <GrLanguage className="h-6 w-6"/>
        </button>
    )
}

export default LanguageToggle