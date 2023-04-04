import Link from "next/link";

const Tags = ({tags}) => {
    return (
        <div key={tags}>
        {
            tags.map((tag, index) => (
                <Link href="#" key={index} className="text-xs mx-2 my-1 inline-block items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                    {tag}
                </Link>
            ))
        }
        </div>
    )
}

export default Tags