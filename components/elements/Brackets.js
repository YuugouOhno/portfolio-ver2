const Brackets = ({ isSelected, children }) => {
    return (
        <>
            {
                isSelected
                ?
                <div className="
                p-2 m-auto text-center relative
                before:content-'' before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:border-4 before:border-white before:border-t-0 before:border-r-0 before:transition-all before:duration-300 before:ease-in before:border-purple-400
                after:content-'' after:absolute after:top-0 after:right-0 after:w-full after:h-0 after:border-4 after:border-white after:border-b-0 after:border-l-0 after:transition-all after:duration-300 after:ease-in after:border-purple-400
                hover:before:border-purple-600 hover:after:border-purple-600
                ">
                    {children}
                </div>
                :
                <div className="
                p-2 m-auto text-center relative
                before:content-'' before:absolute before:bottom-0 before:left-0 before:w-3 before:h-3 before:border-4 before:border-white before:border-t-0 before:border-r-0 before:transition-all before:duration-300 before:ease-in
                after:content-'' after:absolute after:top-0 after:right-0 after:w-3 after:h-3 after:border-4 after:border-white after:border-b-0 after:border-l-0 after:transition-all after:duration-300 after:ease-in
                hover:before:w-full hover:before:h-0 hover:before:left-0 hover:before:border-purple-600
                hover:after:w-full hover:after:h-0 hover:after:right-0 hover:after:border-purple-600
                ">
                    {children}
                </div>
            }
        </>
    )
}

export default Brackets;