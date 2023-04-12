import { MdLanguage } from "react-icons/md";

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
            <MdLanguage className="h-6 w-6 text-black dark:text-white" />
        </button>
    )
}

export default LanguageToggle