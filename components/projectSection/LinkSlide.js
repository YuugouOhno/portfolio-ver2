import Image from "next/image";
import { useTheme } from 'next-themes';
import Link from "next/link";

const LinkSlide = ({ src_path, links }) => {
    const { theme } = useTheme();
    return (
        <div className="relative lg:m-auto lg:w-4/5 h-full dark:bg-black bg-white text-center flex justify-center items-center">
            <Image
                src={src_path}
                className="transition-all rounded-md p-auto"
                alt="project image"
                width="16000"
                height="9000"
                layout="intrinsic"
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href={links.github} target="_blank">
                    {theme === 'dark' ?
                        <Image
                            src="/accounts/github-white.png"
                            alt="github-logo"
                            width="100"
                            height="100"
                            layout="intrinsic"
                        />
                        :
                        <Image
                            src="/accounts/github-black.png"
                            alt="github-logo"
                            width="100"
                            height="100"
                            layout="intrinsic"
                        />
                    }
                </Link>
                <p>test</p>
            </div>

        </div>
    )
}

export default LinkSlide;