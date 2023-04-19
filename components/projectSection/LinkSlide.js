import Image from "next/image";
import Link from "next/link";
import HoverCard from "@/components/animation/HoverCard";
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import { FaKey } from "react-icons/fa";


const LinkSlide = ({ src_path, links }) => {
    const github = links.github
    const deploy = links.deploy
    console.log(github, deploy)
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
            <div class="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {Object.keys(links).map(key => (
                    <Link key={key} href={links[key]} target="_blank">
                        <HoverCard>
                            <div className="flex flex-col w-1/2 h-1/2 text-center items-center justify-center">
                                <Image
                                    src={`/projects/icon/${key}.svg`}
                                    alt={`${key} logo`}
                                    className="color-black m-3"
                                    width="200"
                                    height="200"
                                    layout="intrinsic"
                                />
                                <p>{key}</p>
                            </div>
                        </HoverCard>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default LinkSlide;