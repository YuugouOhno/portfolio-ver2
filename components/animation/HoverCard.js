const HoverCard = ({children}) => {
    return (
        <div className="cursor-pointer group flex flex-col justify-center items-center">
            <div className="relative overflow-hidden transition-all hover:scale-105 flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}

export default HoverCard