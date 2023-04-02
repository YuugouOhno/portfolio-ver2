import Image from "next/legacy/image";
import Link from "next/link";

const ProjectCard = ({ image, title, tags }) => {
    return (
        <div className="cursor-pointer group">
            <div
                className=
                "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105">
                <Link href="#">
                    <div style={{ width: '100%', position: 'relative' }}>
                        <Image
                            src={image}
                            height="180"
                            width="320"
                            className="transition-all"
                            alt="project image"
                            layout="responsive"
                        />
                    </div>
                </Link>
            </div>
            <h2 className="mt-2 text-xl text-center font-semibold tracking-normal text-brand-primary my-4">
                <Link href="#">
                    <span
                        className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
                                bg-[length:0px_10px]
                                bg-left-bottom
                                bg-no-repeat
                                transition-[background-size]
                                duration-500
                                hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                        {title}
                    </span>
                </Link>
            </h2>
            {tags.map((tag, index) => (
            <Link href="#" key={index} className="text-xs mx-2 my-1 inline-block items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
            {tag}
            </Link>
            ))}
        </div>
    )
}

export default ProjectCard;