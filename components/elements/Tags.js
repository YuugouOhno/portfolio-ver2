import Link from "next/link";

const Tags = ({tags}) => {
    return (
        <div key={tags} className="px-10">
        {
            tags.map((tag, index) => (
                <Link href="#" key={index} className="text-xs mx-2 my-1 inline-block items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap border-2 border-transparent rounded-full shadow-sm focus:outline-none
                hover:bg-transparent bg-black text-white hover:text-black hover:border-black dark:hover:bg-transparent dark:bg-white dark:text-black dark:hover:text-white dark:hover:border-white">
                    {tag}
                </Link>
            ))
        }
        </div>
    )
}

export default Tags