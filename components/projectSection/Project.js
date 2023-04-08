import Image from "next/legacy/image";
import { useState } from 'react';

import ProjectLists from "./ProjectLists";
import CardAndTitle from "@/components/animation/CardAndTitle";
import Tags from "@/components/elements/Tags";
import FlipCard from "@/components/animation/FlipCard";


const Project = () => {
    const [whichFlippe, setWhichFlippe] = useState("");

    return (
        <div id="project" className="pt-20 w-screen flex flex-col justify-center items-center  bg-gray-300 text-white">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 flex flex-col justify-center items-start">
                    {ProjectLists.map(project => (
                        <div key={project.id} className="flex flex-col justify-center">
                            <CardAndTitle title={project.title} url={project.url}>
                                <FlipCard value={project.id} whichFlippe={whichFlippe} setWhichFlippe={setWhichFlippe}>
                                    <Image
                                        src={project.image_path}
                                        className="transition-all rounded-md p-auto"
                                        alt="project image"
                                        width="368"
                                        height="207"
                                        layout="fixed"
                                    />
                                    <div >
                                    </div>
                                </FlipCard>
                            </CardAndTitle>
                            <Tags tags={project.tags} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;