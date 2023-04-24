const Tags = ({ tag, color }) => {
    return (
        <div 
            className={`dark:${color} ${color} text-xs mx-2 my-1 inline-block items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap border-2 border-transparent rounded-full shadow-sm focus:outline-none hover:bg-transparent text-white hover:text-black hover:border-black dark:hover:bg-transparent dark:text-black dark:hover:text-white dark:hover:border-white`}
        >
            {tag}
        </div>
    )
}

export default Tags